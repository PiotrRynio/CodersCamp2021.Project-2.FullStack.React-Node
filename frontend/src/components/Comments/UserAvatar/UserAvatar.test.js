import { render, screen } from '@testing-library/react';
import { UserAvatar } from './UserAvatar';

describe('UserAvatar', () => {
  render(<UserAvatar />);
  it('Should properly render component', async () => {
    const userAvatarElement = screen.getByAltText('User avatar');
    expect(userAvatarElement).toBeInTheDocument();
  });
});
