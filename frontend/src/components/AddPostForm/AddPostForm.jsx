import React, { useState } from 'react';
import { Form, FormTitle, Icon, TitleInput, TextArea } from './AddPostForm.styled';
import { BottomFormSection, Button, ErrorText } from '../CommentForm/CommentForm.styled';
import { Title } from '../CommentList/CommentList.styled';

const AddPostForm = () => {
  const [postState, setPostState] = useState({});
  const [errorArray, setErrorArray] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postState.title === undefined || postState.title.length === 0) {
      alert('You need to provide a valid title!');
    } else if (postState.message === undefined || postState.message.length === 0) {
      alert('You need to provide a valid message!');
    } else {
      console.log(postState);
      //TODO to implement - create a comment from the post data
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Comments</Title>
      <div>
        <TitleInput
          type="text"
          name="title"
          placeholder="Enter title..."
          value={postState.title || ''}
          onChange={handleChange}
        />
        <Icon>🌨</Icon>
      </div>
      <TextArea
        type="text"
        name="message"
        placeholder="Enter message..."
        value={postState.message || ''}
        onChange={handleChange}
      />
      <BottomFormSection>
        <ErrorText>Temp error</ErrorText>
        <Button type="submit">Add post</Button>
      </BottomFormSection>
    </Form>
  );
};

export default AddPostForm;
