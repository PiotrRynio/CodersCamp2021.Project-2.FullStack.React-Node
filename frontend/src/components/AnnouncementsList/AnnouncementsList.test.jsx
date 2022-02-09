import { render, screen, waitForElementToBeRemoved } from 'test-utils';
import AnnouncementsList from './AnnouncementsList';
import {
  getRegisteredEventsWillReturn,
  getRegisteredEventsWillReturnFail,
} from 'mocks/msw/rest-api/boards/mockEndpoints/boardsAnnouncementsMockEndpoints';
import { boardsResponse } from 'mocks/msw/rest-api/boards/responses/boardsResponse';

describe('PostAddingForm', () => {
  const boardsIds = [0, 1];
  const announcementsNumber = 4;
  it('Should show loading message before get query data', async () => {
    //when
    render(<AnnouncementsList boardsIds={boardsIds} announcementsNumber={announcementsNumber} />);

    // then
    const loadingStatus = screen.getByText(/Loading/i);
    expect(loadingStatus).toBeInTheDocument();
  });

  it('Should show data after query', async () => {
    //given
    getRegisteredEventsWillReturn(boardsResponse);

    //when
    render(<AnnouncementsList boardsIds={boardsIds} announcementsNumber={announcementsNumber} />);
    await waitForElementToBeRemoved(screen.queryByText(/Loading/i));

    // then
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(4);
    headings.forEach((heading) => {
      expect(heading).toBeInTheDocument();
    });
  });

  it('Should properly show error status', async () => {
    // given
    getRegisteredEventsWillReturnFail();

    //when
    render(<AnnouncementsList boardsIds={boardsIds} announcementsNumber={announcementsNumber} />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), { timeout: 10000 });

    // then
    const errorStatus = screen.getByText(/Error/i);
    expect(errorStatus).toBeInTheDocument();
  }, 10000);
});
