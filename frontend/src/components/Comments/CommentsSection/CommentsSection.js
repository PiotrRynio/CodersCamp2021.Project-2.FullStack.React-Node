import { CommentForm } from '../CommentInputForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';

export const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const { data, isLoading, isError } = useQuery('commentList', async () => {
    return await fetch('/commentLists').then((response) => response.json());
  });

  useEffect(() => {
    if (data) {
      setComments(data.commentList);
    }
  }, [data]);

  const handleCommentSubmit = (comment) => {
    console.log(comment.commentText);
    //setComments(comments.push(comment));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <CommentForm handleSubmit={handleCommentSubmit} />
      <CommentList comments={data.commentList} />
    </div>
  );
};
