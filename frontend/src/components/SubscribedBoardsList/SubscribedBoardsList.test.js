import { render, screen } from '../../test-utils';
import { SubscribedBoardsList } from './SubscribedBoardsList';
import {
  getBoardsWillReturn,
  getBoardsWillReturnFail,
} from '../../mocks/msw/rest-api/boards/mockEndpoints/boardsAnnouncementsMockEndpoints';
import { waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import avatar1 from '../../mocks/images/avatars/sample-avatar1.jpg';

describe('SubscribedBoardsList', () => {
  const fakeBoard1 = {
    id: 1,
    icon: avatar1,
    boardName: 'TestBoardName1',
    announcements: [],
    author: 'TestAuthor1',
  };

  const fakeBoard2 = {
    id: 2,
    icon: avatar1,
    boardName: 'TestBoardName2',
    announcements: [],
    author: 'TestAuthor2',
  };
  it('Should properly render component', () => {
    //when
    render(<SubscribedBoardsList />);
  });
  it('Should display status when component is loading', () => {
    //when
    render(<SubscribedBoardsList />);
    // then
    const loadingStatus = screen.getByText(/Loading/i);
    expect(loadingStatus).toBeInTheDocument();
  });
  it('Should display status when error occurred', async () => {
    // given
    getBoardsWillReturnFail();
    render(<SubscribedBoardsList />);

    // when
    const errorStatus = await waitFor(() => screen.findByText(/Error/i), { timeout: 10000 });
    // then
    expect(errorStatus).toBeInTheDocument();
  });
  /*  it('Should properly display subscribed boards list', async () => {
    const fakeBoardsResponse = { boards: [fakeBoard1, fakeBoard2] };

    // given
    getBoardsWillReturn(fakeBoardsResponse);
    render(<SubscribedBoardsList />);

    //when
    const boardName = await waitFor(() => screen.findByText(/TestBoardName1/i), { timeout: 10000 });
    // then
    //screen.getByText('TestBoardName1');
  });*/
});
