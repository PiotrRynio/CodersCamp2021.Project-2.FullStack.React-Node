import { UserAvatar } from '../UserAvatar/UserAvatar';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import { LeftSection, Form, CommentFormContainer } from './CommentForm.styled';
import { useState } from 'react';

export const CommentForm = ({ handleSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const validateForm = () => {
    let isFormValid = true;
    let errorTexts = [];

    if (!commentText) {
      isFormValid = false;
      errorTexts.push('Cannot be empty!');
    }

    if (!commentText.lenght > 500) {
      isFormValid = false;
      errorTexts.push('Too long!');
    }

    if (isFormValid) {
      handleSubmit();
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  return (
    <CommentFormContainer>
      <LeftSection>
        <UserAvatar userAvatarImage={avatar1} />
      </LeftSection>
      <Form onSubmit={onSubmit}>
        <textarea
          onChange={(e) => {
            setCommentText(e.target.value);
            console.log(commentText);
          }}
        />
        <button type="submit">Add comment</button>
      </Form>
    </CommentFormContainer>
  );
};
