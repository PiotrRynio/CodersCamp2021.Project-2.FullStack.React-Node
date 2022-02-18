import { UserAvatar } from '../UserAvatar/UserAvatar';
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
import { useContext } from 'react';
import { UserContext } from 'providers/AppProviders';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

export const CommentForm = ({ announcementId, refetchCallback }) => {
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation((newComment) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    };
    return fetch(`/announcements/${announcementId}/comments`, requestOptions)
      .then((response) => response.json())
      .then(() => refetchCallback());
  });

  const submitHandler = ({ commentText }) => {
    const newComment = {
      content: commentText,
      createDate: new Date(),
      author: user,
    };
    mutate(newComment);
  };

  return (
    <>
      <FormContainer>
        <AvatarContainer>
          <UserAvatar userAvatarImage={user.avatarUrl} />
        </AvatarContainer>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <TextArea
            placeholder="Add comment..."
            {...register('commentText', { required: true, maxLength: 500 })}
          />
          <BottomFormSection>
            <ErrorText>{/*errorText*/}</ErrorText>
            <Button type="submit">Add comment</Button>
          </BottomFormSection>
        </Form>
      </FormContainer>
      <BottomLine />
    </>
  );
};
