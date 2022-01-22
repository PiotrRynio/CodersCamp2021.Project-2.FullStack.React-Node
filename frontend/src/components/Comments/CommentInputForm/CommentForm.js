import { UserAvatar } from '../../UserAvatar/UserAvatar';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import {
  LeftSection,
  Form,
  CommentFormContainer,
  BottomLine,
  TextArea,
  BottomFormSection,
} from './CommentForm.styled';
import { useState } from 'react';

export const CommentForm = ({ handleSubmit }) => {
  const sampleUser1 = {
    userId: 1,
    avatarUrl: avatar1,
    firstName: 'Andrzej',
    lastName: 'Nowak',
  };

  const sampleComment1 = {
    commentId: Math.random(0, 100),
    content: 'Great idea!',
    createDate: '2021-06-20T15:48:21.000',
    author: sampleUser1,
  };

  const [commentText, setCommentText] = useState('');
  const [errorText, setErrorText] = useState('');

  const validateForm = () => {
    setErrorText('');

    if (!commentText) {
      setErrorText('Cannot be empty!');
      return false;
    }

    if (!commentText.length > 500) {
      setErrorText('Too long! Comment must be shorter than 500 chars.');
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form ok');

      const newComment = {
        content: commentText,
        createDate: new Date(),
        author: sampleUser1,
      };

      setCommentText('');
      handleSubmit(sampleComment1);
    } else console.log('Invalid form');
  };

  return (
    <>
      <CommentFormContainer>
        <LeftSection>
          <UserAvatar userAvatarImage={avatar1} />
        </LeftSection>
        <Form onSubmit={onSubmit}>
          <TextArea
            placeholder="Add comment..."
            //           required
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
            rows="4"
            cols="70"
            value={commentText}
          />
          <BottomFormSection>
            <span>{errorText}</span>
            <button type="submit">Add comment</button>
          </BottomFormSection>
        </Form>
      </CommentFormContainer>
      <BottomLine />
    </>
  );
};
