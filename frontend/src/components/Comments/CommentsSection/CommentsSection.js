import { CommentForm } from '../CommentInputForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { Section } from 'components/Comments/CommentsSection/CommentsSection.styled';

export const CommentsSection = () => {
  //const [comments, setComments] = useState([]);
  const { data, isLoading, isError } = useQuery('commentList', async () => {
    return await fetch('/commentLists').then((response) => response.json());
  });

  // const { commentList } = data;
  /*
  useEffect(() => {
    if (data) {
      setComments(data.commentList);
    }
  }, [data]); */
  // console.log(test);

  const handleCommentSubmit = (comment) => {
    //  test.push(comment);
    /*     console.log('comment content:' + comment.content);
    setComments([...comments, comment]); */

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    };
    fetch('/commentLists', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    //mutation();
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Section>
      <CommentForm handleSubmit={handleCommentSubmit} />

      <CommentList comments={data.commentList} />
    </Section>
  );
};
