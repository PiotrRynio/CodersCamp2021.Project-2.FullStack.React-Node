import { render, screen } from '@testing-library/react';
import { UserAvatar } from './UserAvatar';
//import '@testing-library/jest-dom';

describe('UserAvatar', () => {
  render(<UserAvatar userAvatarImage="" />);
  it('Should properly render component', async () => {
    const userAvatarElement = screen.getByAltText('User avatar');
    expect(userAvatarElement).toBeInTheDocument();
  });
});
