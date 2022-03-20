import { useMutation, useQuery } from 'react-query';
import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import Select from 'react-select';
import { ErrorMessage } from '@hookform/error-message';
import { useForm, Controller } from 'react-hook-form';

import {
  Form,
  FormTitle,
  SecondFormRow,
  MarkedTitle,
  TitleInput,
  ContentInput,
  StyledOptions,
  Button,
  LeftColumn,
  RightColumn,
  ErrorText,
  BottomFormSection,
} from './PostAddingForm.styled';
import { REST_API_URL } from '../../constants/restApiPaths';
import { useNavigate } from 'react-router';

const PostAddingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const {
    data: dataAvailableUserBoards,
    isLoading,
    isError,
  } = useQuery('AvailableBoardsPostAddingForm', async () => {
    return await fetch(`${REST_API_URL}/boards`).then((response) =>
      response.json().then((data) => {
        return data.boards.map((board) => {
          return { value: board.boardName, label: board.boardName, id: board._id };
        });
      }),
    );
  });

  const { mutate } = useMutation(({ newAnnouncement, boardId }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAnnouncement),
    };
    return fetch(`${REST_API_URL}/boards/${boardId}/announcements`, requestOptions)
      .then((response) => response.json())
      .then(({ announcements }) => {
        const lastIndex = announcements.length - 1;
        navigate(`/announcements/${announcements[lastIndex].id}`);
      });
  });

  const iconOptions = [
    { value: 'water', label: <FaTint /> },
    { value: 'electricity', label: <FaBolt /> },
    { value: 'pets', label: <FaDog /> },
    { value: 'default', label: <FaBullhorn /> },
  ];

  const onSubmit = (data) => {
    const newAnnouncement = {
      title: data.title,
      boardName: data.boardName.value,
      iconType: data.iconType.value,
      content: data.content,
      date: new Date(),
    };
    const boardId = data.boardName.id;
    mutate({ newAnnouncement, boardId });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        Add new <MarkedTitle>Announcement</MarkedTitle>
      </FormTitle>
      <label>Select your board</label>
      <Controller
        name="boardName"
        control={control}
        defaultValue={dataAvailableUserBoards[0]}
        render={({ field }) => (
          <Select {...field} styles={StyledOptions} options={dataAvailableUserBoards} />
        )}
      />
      <SecondFormRow>
        <LeftColumn>
          <label htmlFor="titleInput">Title</label>
          <TitleInput
            id="titleInput"
            type="text"
            placeholder="Enter title..."
            {...register('title', {
              required: "This field can't be empty.",
              pattern: {
                value: /.*[^\s].*/,
                message: "This field can't contain only whitespaces",
              },
              minLength: {
                value: 5,
                message: 'Your message should be at least 5 characters long',
              },
              maxLength: {
                value: 100,
                message: "Your title shouldn't exceed 100 characters",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => <ErrorText>{message}</ErrorText>}
          />
        </LeftColumn>
        <RightColumn>
          {' '}
          <label htmlFor="iconInput">Icon</label>
          <Controller
            id="iconInput"
            name="iconType"
            control={control}
            defaultValue={iconOptions[0]}
            render={({ field }) => (
              <Select {...field} styles={StyledOptions} options={iconOptions} />
            )}
          />
        </RightColumn>
      </SecondFormRow>
      <label htmlFor="content">Announcement text</label>
      <ContentInput
        type="text"
        placeholder="Enter announcement message..."
        {...register('content', {
          required: "This field can't be empty",
          pattern: {
            value: /.*[^\s].*/,
            message: "This field can't contain only whitespaces",
          },
          minLength: {
            value: 20,
            message: 'Your message should be at least 20 characters long',
          },
          maxLength: {
            value: 300,
            message: "Your message shouldn't exceed 300 characters",
          },
        })}
      />
      <BottomFormSection>
        <div>
          <Button type="submit">Add</Button>
        </div>
        <ErrorMessage
          errors={errors}
          name="content"
          render={({ message }) => <ErrorText>{message}</ErrorText>}
        />
      </BottomFormSection>
    </Form>
  );
};

export default PostAddingForm;
