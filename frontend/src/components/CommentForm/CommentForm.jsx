import { UserAvatar } from '../UserAvatar/UserAvatar';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import {
  AvatarContainer,
  Form,
  FormContainer,
  BottomLine,
  TextArea,
  BottomFormSection,
  Button,
  ErrorText,
} from './CommentForm.styled';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CommentForm = ({ handleSubmit }) => {
  const sampleUser1 = {
    userId: uuidv4(),
    avatarUrl: avatar1,
    firstName: 'Andrzej',
    lastName: 'Nowak',
  };

  const [commentText, setCommentText] = useState('');
  const [errorText, setErrorText] = useState('');

  const validateForm = () => {
    setErrorText('');

    if (!commentText) {
      setErrorText('Can not be empty!');
      return false;
    }

    //TODO ograniczenie z bazy danych gdy bedzie back
    if (!commentText.length > 500) {
      setErrorText('Too long! Comment must be shorter than 500 characters.');
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const newComment = {
        commentId: uuidv4(),
        content: commentText,
        createDate: new Date(),
        author: sampleUser1,
      };
      setCommentText('');
      handleSubmit(newComment);
    }
  };

  return (
    <>
      <FormContainer>
        <AvatarContainer>
          <UserAvatar userAvatarImage={avatar1} />
        </AvatarContainer>
        <Form onSubmit={onSubmit}>
          <TextArea
            placeholder="Add comment..."
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
            rows="4"
            cols="70"
            value={commentText}
          />
          <BottomFormSection>
            <ErrorText>{errorText}</ErrorText>
            <Button type="submit">Add comment</Button>
          </BottomFormSection>
        </Form>
      </FormContainer>
      <BottomLine />
    </>
  );
};
