import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
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
  ErrorMessage,
} from './PostAddingForm.styled';

const PostAddingForm = ({ formSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    data: dataAvailableUserBoards,
    isLoading,
    isError,
  } = useQuery('AvailableBoardsPostAddingForm', async () => {
    return await fetch('/boards?isNearUser=true').then((response) =>
      response.json().then((data) => {
        return data.boards.map((board) => {
          return { value: board.boardName, label: board.boardName };
        });
      }),
    );
  });

  const { mutate } = useMutation((newComment) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    };
    return fetch('/boards/1/announcements', requestOptions).then((response) => response.json());
  });

  const iconOptions = [
    { value: 'water', label: <FaTint /> },
    { value: 'electricity', label: <FaBolt /> },
    { value: 'pets', label: <FaDog /> },
    { value: '', label: <FaBullhorn /> },
  ];

  const onSubmit = (data) => {
    let newAnnouncement = {
      id: uuidv4(),
      title: data.title,
      boardName: data.boardName.value,
      iconType: data.iconType.value,
      content: data.content,
      date: new Date(),
    };
    mutate(newAnnouncement);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
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
            {...register('title', { required: true, minLength: 5, maxLength: 100 })}
          />
          {errors.title && errors.title.type === 'required' && (
            <ErrorMessage>This field can't be empty</ErrorMessage>
          )}
          {errors.title && errors.title.type === 'minLength' && (
            <ErrorMessage>Your title should be at least 5 characters long</ErrorMessage>
          )}
          {errors.title && errors.title.type === 'maxLength' && (
            <ErrorMessage>Your title shouldn't exceed 100 characters</ErrorMessage>
          )}
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
        {...register('content', { required: true, minLength: 3, maxLength: 300 })}
      />
      {errors.content && errors.content.type === 'required' && (
        <ErrorMessage>This field can't be empty</ErrorMessage>
      )}
      {errors.content && errors.content.type === 'minLength' && (
        <ErrorMessage>Your message should be at least 3 characters long</ErrorMessage>
      )}
      {errors.content && errors.content.type === 'maxLength' && (
        <ErrorMessage>Your message shouldn't exceed 300 characters</ErrorMessage>
      )}
      <div>
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
};

export default PostAddingForm;
