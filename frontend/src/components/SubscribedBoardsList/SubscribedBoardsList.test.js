import { render, screen } from '../../test-utils';
import { SubscribedBoardsList } from './SubscribedBoardsList';

describe('SubscribedBoardsList', () => {
  it('Should properly render component', () => {
    //when
    render(<SubscribedBoardsList />);
  });
  it('Should show status when component is loading', () => {
    //when
    render(<SubscribedBoardsList />);
    // then
    const loadingStatus = screen.getByText(/Loading/i);
    expect(loadingStatus).toBeInTheDocument();
  });
});
