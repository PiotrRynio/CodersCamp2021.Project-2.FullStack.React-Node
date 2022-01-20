import { UserAvatar } from '../../UserAvatar/UserAvatar';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import { LeftSection, Form, CommentFormContainer } from './CommentForm.styled';
import { useState } from 'react';

export const CommentForm = ({ handleSubmit }) => {
  const [commentText, setCommentText] = useState('');
  const [errorText, setErrorText] = useState('');

  const validateForm = () => {
    let isFormValid = true;

    if (!commentText) {
      isFormValid = false;
      setErrorText('Cannot be empty!');
    }

    if (!commentText.length > 500) {
      isFormValid = false;
      setErrorText('Too long! Comment must be shorter than 500 chars.');
    }
    return isFormValid;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form ok');
      //handleSubmit();
    } else console.log('Invalid form');
  };

  return (
    <CommentFormContainer>
      <LeftSection>
        <UserAvatar userAvatarImage={avatar1} />
      </LeftSection>
      <Form onSubmit={onSubmit}>
        <textarea
          placeholder="Add comment"
          //           required
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
        />
        <span>{errorText}</span>
        <button type="submit">Add comment</button>
      </Form>
    </CommentFormContainer>
  );
};
