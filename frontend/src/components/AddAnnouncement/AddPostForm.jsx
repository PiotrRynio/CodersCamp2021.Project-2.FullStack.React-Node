import {
  Form,
  Line,
  FormTitle,
  SecondFormRow,
  MarkedTitle,
  TitleInput,
  ContentInput,
  StyledOptions,
  Button,
  LeftColumn,
  RightColumn,
  BottomFormSection,
} from 'components/AddAnnouncement/AddPostForm.styled';
import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm = ({ formSubmit }) => {
  const { register, handleSubmit, control } = useForm();

  const {
    data: dataQuery,
    isLoading,
    isError,
  } = useQuery('announcementsList', async () => {
    return await fetch('/boards/1/announcements').then((response) => response.json());
  });

  const {
    mutate,
    data: mutationData,
    error: isMutationError,
    isLoading: isLoadingMutation,
  } = useMutation((newComment) => {
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

  //TODO - zaciagnac z bazy available boards dla uzytkownika
  const availableBoards = [
    { value: 'Board 1', label: 'Board 1' },
    { value: 'Board 2', label: 'Board 2' },
    { value: 'Board 3', label: 'Board 3' },
    { value: 'Board 4', label: 'Board 4' },
  ];

  const onSubmit = (data) => {
    console.log(data);
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        Add new <MarkedTitle>Announcement</MarkedTitle>
      </FormTitle>
      <Line />

      <label>Select your board</label>
      <Controller
        name="boardName"
        control={control}
        defaultValue={availableBoards[0]}
        render={({ field }) => (
          <Select {...field} styles={StyledOptions} options={availableBoards} />
        )}
      />
      <SecondFormRow>
        <LeftColumn>
          <label htmlFor="titleInput">Title</label>
          <TitleInput
            id="titleInput"
            type="text"
            placeholder="Enter title..."
            {...register('title', { required: true })}
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
              <Select {...field}  styles={StyledOptions} options={iconOptions} />
            )}
          />
        </RightColumn>
      </SecondFormRow>
      <label htmlFor="content">Announcement text</label>
      <ContentInput
        type="text"
        placeholder="Enter description..."
        {...register('content', { required: true })}
      />
      <BottomFormSection>
        <Button type="submit">Add</Button>
      </BottomFormSection>
    </Form>
  );
};

AddPostForm.propTypes = {};

export default AddPostForm;
