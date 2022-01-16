import React, { useState } from 'react';
import { Wrapper, Label, Icon, TitleInput, MessageInput, SubmitInput } from './AddPostForm.styled';

const AddPostForm = () => {
  const [postObject, setPostObject] = useState({});

  const handleChange = (event) => {
    const title = event.target.value;
    const message = event.target.message;
    setPostObject((values) => ({ ...values, [title]: message }));
    console.log(event.target.message);
    console.log(event.target.message);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(postObject);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Label>Add new post</Label>
        <Icon>🌨</Icon>
        <TitleInput
          type="text"
          name="title"
          value={postObject.title || 'Enter title...'}
          onChange={handleChange}
        />
        <MessageInput
          type="text"
          name="message"
          value={postObject.username || 'Enter message...'}
          onChange={handleChange}
        />
        <SubmitInput type="submit" value="submit" />
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
