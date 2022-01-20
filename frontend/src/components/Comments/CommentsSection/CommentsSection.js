import { CommentForm } from '../CommentInputForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';

export const CommentsSection = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <CommentForm />
      <CommentList />
    </div>
  );
};
