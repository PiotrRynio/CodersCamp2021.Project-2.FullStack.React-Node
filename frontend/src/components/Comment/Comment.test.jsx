import { render, screen } from '@testing-library/react';
import { Comment } from './Comment';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';
import { AppProviders } from '../../providers/AppProviders';

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
  const fakeDate = new Date(fakeComment.createDate).toLocaleString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  it('Should properly render component', async () => {
    render(
      <AppProviders>
        <Comment comment={fakeComment} />
      </AppProviders>,
    );
    const avatar = screen.getByAltText('User avatar');
    const date = screen.getByText(fakeDate);
    const content = screen.getByRole('article');

    expect(avatar).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
