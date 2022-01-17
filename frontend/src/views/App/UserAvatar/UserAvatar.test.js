import { render, screen, cleanup } from '@testing-library/react';
import { UserAvatar } from './UserAvatar';
import { sampleCommentList } from '../../mocks/UserCommentList';
import { act } from 'react-dom/test-utils';

afterEach(() => cleanup());

describe('UserAvatar', () => {
  it('Should properly render component', async () => {
    render(<UserAvatar />);
    const userAvatarElement = screen.getByTestId('userAvatar');
    expect(userAvatarElement).toBeInTheDocument();
  });
  it('Should properly show avatar', async () => {
    render(<UserAvatar />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('alt', 'User avatar');
  });
});
