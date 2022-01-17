import { cleanup, render, screen } from '@testing-library/react';
import { UserComment } from './UserComment';
import avatar1 from '../../../mocks/images/avatars/sample-avatar1.jpg';

afterEach(() => cleanup());

describe('UserComment', () => {
  const fakeComment = {
    commentId: 10,
    content: 'I agree.',
    createDate: '2021-06-20T15:48:21.000',
    author: {
      userId: 10,
      avatarUrl: avatar1,
      firstName: 'Tomasz',
      lastName: 'Kowalski',
    },
  };
  it('Should properly render component', async () => {
    render(<UserComment comment={fakeComment} />);
    const commentElement = screen.getByTestId('userComment');
    expect(commentElement).toBeInTheDocument();
  });
  it('Should contain expected elements', async () => {
    render(<UserComment comment={fakeComment} />);
    const commentElement = screen.getByTestId('userComment');
    const avatar = screen.getByTestId('userAvatar');
    const date = screen.getByTestId('date');
    const content = screen.getByTestId('content');

    expect(commentElement).toContainElement(avatar);
    expect(commentElement).toContainElement(date);
    expect(commentElement).toContainElement(content);
  });
});
