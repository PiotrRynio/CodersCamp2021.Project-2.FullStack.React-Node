import { render, screen, waitFor } from 'test-utils';
import BoardsList from './BoardsList';
import {
  getRegisteredEventsWillReturn,
  getRegisteredEventsWillReturnFail,
} from 'mocks/msw/rest-api/boards/mockEndpoints/boardsAnnouncementsMockEndpoints';
import { boardsResponse } from 'mocks/msw/rest-api/boards/responses/boardsResponse';

describe('BoardList', () => {
  it("Shouldn't show anything before get query data", async () => {
    //when
    const { component } = render(<BoardsList />);

    // then
    expect(component).toBeUndefined();
  });

  it('Should show data after query', async () => {
    //given
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
    };
    global.navigator.geolocation = mockGeolocation;
    getRegisteredEventsWillReturn(boardsResponse);

    //when
    render(<BoardsList />);
    const boardsItems = await waitFor(() => screen.getAllByText(/Posts in last month/i));

    // then
    expect(boardsItems).toHaveLength(3);
  });
});
