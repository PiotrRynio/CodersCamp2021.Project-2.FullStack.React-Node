import { useState } from 'react';
import {
  Form,
  Line,
  FormTitle,
  SecondFormRow,
  IconOptions,
  MarkedTitle,
  TitleInput,
  ContentInput,
  BoardOptions,
  Button,
} from 'components/AddAnnouncement/AddPostForm.styled';
import { BottomFormSection, ErrorText } from '../CommentForm/CommentForm.styled';
import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import Select from 'react-select';
import { useForm } from 'react-hook-form';

const AddPostForm = ({ callback }) => {
  const [postState, setPostState] = useState({});
  const [errorArray, setErrorArray] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const iconOptions = [
    { value: 'water', label: <FaTint /> },
    { value: 'electricity', label: <FaBolt /> },
    { value: 'pets', label: <FaDog /> },
    { value: '', label: <FaBullhorn /> },
  ];
  const availableBoards = [
    { value: 'Board 1', label: 'Board 1' },
    { value: 'Board 2', label: 'Board 2' },
    { value: 'Board 3', label: 'Board 3' },
    { value: 'Board 4', label: 'Board 4' },
  ];
  const validateForm = () => {
    setErrorArray([]);

    if (!postState.title) {
      setErrorArray(...errorArray, 'Title can not be empty!');
      return false;
    } else if (postState.title.length > 100) {
      //TODO ograniczenie z bazy danych gdy bedzie back
      //TODO wyswietlic uzytkownikowi ile ma liter
      setErrorArray(...errorArray, 'Title too long, max 100 characters!}');
      return false;
    }

    if (!postState.message) {
      setErrorArray(...errorArray, 'Title can not be empty!');
      return false;
    }

    if (!postState.message.length > 500) {
      setErrorArray(...errorArray, '!');
      return false;
    }
    return true;
  };
  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setPostState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = '';
  /*  const handleSubmit = (event) => {
    event.preventDefault();
    if (postState.title === undefined || postState.title.length === 0) {
      alert('You need to provide a valid title!');
    } else if (postState.message === undefined || postState.message.length === 0) {
      alert('You need to provide a valid message!');
    } else {
      console.log(postState);
      //TODO to implement - create a comment from the post data
    }
  };*/

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>
        Add new <MarkedTitle>Announcement</MarkedTitle>
      </FormTitle>
      <Line />
      <Select
        styles={BoardOptions}
        options={availableBoards}
        isSearchable={false}
        maxMenuHeight={190}
        defaultValue={BoardOptions[0]}
      />
      <SecondFormRow>
        <TitleInput
          type="text"
          placeholder="Enter title..."
          {...register('title', { required: true })}
        />

        <Select
          styles={IconOptions}
          options={iconOptions}
          isSearchable={false}
          maxMenuHeight={190}
          defaultValue={iconOptions[3]}
        />
      </SecondFormRow>
      <ContentInput
        type="text"
        placeholder="Enter description..."
        {...register('description', { required: true })}
      />
      <BottomFormSection>
        <ErrorText>Temp error</ErrorText>
        <Button type="submit">Add</Button>
      </BottomFormSection>
    </Form>
  );
};

export default AddPostForm;
