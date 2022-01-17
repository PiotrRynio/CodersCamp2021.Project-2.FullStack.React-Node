import { render, screen, cleanup } from '@testing-library/react';
import { UserAvatar } from './UserAvatar';

afterEach(() => cleanup());

describe('UserAvatar', () => {
  it('Should properly render component', async () => {
    render(<UserAvatar />);
    const userAvatarElement = screen.getByTestId('userAvatar');
    expect(userAvatarElement).toHaveAttribute('alt', 'User avatar');
    expect(userAvatarElement).toBeInTheDocument();
  });
});
