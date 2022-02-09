import PostAddingForm from './PostAddingForm';
import { render, screen, waitForElementToBeRemoved, waitFor } from 'test-utils';
import {
  getRegisteredEventsWillReturn,
  getRegisteredEventsWillReturnFail,
} from '../../mocks/msw/rest-api/boards/mockEndpoints/boardsAnnouncementsMockEndpoints';
import { availableForUserBoardsResponse } from '../../mocks/msw/rest-api/boards/responses/boardsResponse';

describe('PostAddingForm', () => {
  it('Should properly render form before data is received', async () => {
    //when
    render(<PostAddingForm />);

    // then
    const loadingStatus = screen.getByText(/Loading/i);
    expect(loadingStatus).toBeInTheDocument();
  });

  it('Should properly show error status', async () => {
    // given
    getRegisteredEventsWillReturnFail();

    //when
    render(<PostAddingForm />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), { timeout: 10000 });

    // then
    const errorStatus = screen.getByText(/Error/i);
    expect(errorStatus).toBeInTheDocument();
  }, 10000);

  it('Should display add post form', async () => {
    // given
    getRegisteredEventsWillReturn(availableForUserBoardsResponse);

    //when
    render(<PostAddingForm />);
    await waitForElementToBeRemoved(screen.queryByText(/Loading/i));

    // then
    const msg = screen.getByText(/Add new/i);
    expect(msg).toBeInTheDocument();
  });
});
