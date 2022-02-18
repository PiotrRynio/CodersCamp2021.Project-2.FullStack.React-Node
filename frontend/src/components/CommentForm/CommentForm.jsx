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
import { ErrorMessage } from '@hookform/error-message';

export const CommentForm = ({ announcementId, refetchCallback }) => {
  const { user } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { mutate } = useMutation((newComment) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    };
    return fetch(`/announcements/${announcementId}/comments`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        refetchCallback();
        reset();
        return data;
      });
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
            {...register('commentText', {
              required: 'This is required.',
              pattern: {
                value: /.*[^\s].*/,
                message: "Comment can't contain only whitespaces",
              },
              maxLength: {
                value: 500,
                message: 'This input exceed max length (500).',
              },
            })}
          />
          <BottomFormSection>
            <Button type="submit">Add comment</Button>
            <ErrorMessage
              errors={errors}
              name="commentText"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </BottomFormSection>
        </Form>
      </FormContainer>
      <BottomLine />
    </>
  );
};
