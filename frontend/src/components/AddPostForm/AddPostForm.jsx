import React, { useState } from 'react';
import { Form, FormTitle, Icon, TitleInput, MessageInput, SubmitInput } from './AddPostForm.styled';

const AddPostForm = () => {
  const [postState, setPostState] = useState({});

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setPostState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(postState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Add new post</FormTitle>
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
      <MessageInput
        type="text"
        name="message"
        placeholder="Enter message..."
        value={postState.message || ''}
        onChange={handleChange}
      />
      <SubmitInput type="submit" value="submit" />
    </Form>
  );
};

export default AddPostForm;
