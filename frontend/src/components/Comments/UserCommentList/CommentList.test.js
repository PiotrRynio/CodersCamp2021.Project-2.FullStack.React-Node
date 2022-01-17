import { cleanup, render, screen } from '@testing-library/react';
import { CommentList } from './CommentList';
import { UserComment } from '../UserComment/UserComment';
import { avatar1 } from '../../../mocks/images/avatars/sample-avatar1.jpg';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import '../../../../src/setupTests';

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
    createDate: '2021-06-20T15:48:21.000',
    author: {
      userId: 20,
      avatarUrl: avatar1,
      firstName: 'Jan',
      lastName: 'Nowak',
    },
  },
];

afterEach(() => cleanup());

describe('User comment list', () => {
  it('Should properly render component', async () => {
    render(<CommentList comments={fakeList} />);
    const commentElement = screen.getByTestId('userCommentList');
    expect(commentElement).toBeInTheDocument();
  });

  it('Should contain expected elements', async () => {
    render(<CommentList comments={fakeList} />);
    const commentListElement = screen.getByTestId('userCommentList');
  });

  it('Should contain expected number of comments', () => {
    const wrapper = shallow(<CommentList comments={fakeList} />);
    expect(wrapper.find(UserComment)).toHaveLength(fakeList.length);
  });
});
