import { render, screen, cleanup } from '@testing-library/react';
import { UserAvatar } from './UserAvatar';

afterEach(() => cleanup());

describe('UserAvatar', () => {
  it('Should properly render component', () => {
    render(<UserAvatar />);
    const userAvatarElement = screen.getByTestId('userAvatar');
    expect(userAvatarElement).toBeInTheDocument();
  });
  it('Should properly show avatar', () => {
    render(<UserAvatar />);
    const avatarImage = screen.getByRole('img');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('alt', 'User avatar');
  });
});
