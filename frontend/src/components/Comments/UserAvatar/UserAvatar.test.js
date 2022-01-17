import { render, screen } from '@testing-library/react';
import { UserAvatar } from './UserAvatar';

describe('UserAvatar', () => {
  it('Should properly render component', async () => {
    render(<UserAvatar />);
    const userAvatarElement = screen.getByAltText('User avatar');
    expect(userAvatarElement).toBeInTheDocument();
  });
});
