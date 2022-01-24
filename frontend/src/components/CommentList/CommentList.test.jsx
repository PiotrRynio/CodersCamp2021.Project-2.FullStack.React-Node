import { render, screen } from '@testing-library/react';
import { CommentList } from './CommentList';
import { avatar1 } from 'mocks/images/avatars/sample-avatar1.jpg';
import '../../setupTests';

const fakeList = [
  {
    commentId: 10,
    content: 'I agree.',
    createDate: '2021-06-20T15:48:21.000',
    author: {
      userId: 10,
      avatarUrl: avatar1,
      firstName: 'Tomasz',
      lastName: 'Kowalski',
    },
  },
  {
    commentId: 20,
    content: 'I agree.',
    createDate: '2021-12-10T10:43:21.000',
    author: {
      userId: 20,
      avatarUrl: avatar1,
      firstName: 'Jan',
      lastName: 'Nowak',
    },
  },
];

describe('User comment list', () => {
  it('Should properly render component', async () => {
    //when
    render(<CommentList comments={fakeList} />);
    const title = screen.getByText('Comments');

    //then
    expect(title).toBeInTheDocument();
  });

  it('Should contain expected number of comments', () => {
    //when
    render(<CommentList comments={fakeList} />);
    const userComments = screen.getAllByTestId('comment');

    //then
    expect(userComments).toHaveLength(fakeList.length);
  });
});
