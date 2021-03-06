import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { ErrorMessage } from '@hookform/error-message';
import { UserContext } from 'providers/AppProviders';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
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
import { REST_API_URL } from '../../constants/restApiPaths';

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
    return fetch(`${REST_API_URL}/announcements/${announcementId}/comments`, requestOptions)
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
      author: {
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg',
      },
    };
    mutate(newComment);
  };

  return (
    <>
      <FormContainer>
        <AvatarContainer>
          <UserAvatar
            userAvatarImage={
              'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
            }
          />
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
