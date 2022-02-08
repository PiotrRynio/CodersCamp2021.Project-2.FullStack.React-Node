import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from 'test-utils';
import Announcement from './Announcement';

describe('Announcement', () => {
  const fakeAnnouncement = {
    id: 0,
    title: 'Skradziono rower!',
    boardName: 'Sobótka',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in risus eros. Morbi euismod magna ut lacus luctus tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce leo eros, pretium et blandit vestibulum, accumsan nec tellus. Pellentesque odio est, posuere at lectus ac, fermentum dignissim purus. Pellentesque convallis faucibus ex sed sollicitudin. Vestibulum sodales quis felis eget facilisis. Integer venenatis, tellus in consectetur eleifend, risus nulla feugiat nisl, a ornare diam urna sed risus. Maecenas a volutpat est. Maecenas mattis odio a ligula euismod, sit amet viverra massa aliquet.\n',
    comments: ['a', 'b', 'c'],
    date: new Date(1995, 11, 17, 3, 24, 0),
  };

  it('Should properly render announcement', async () => {
    //given

    //when
    render(
      <Router>
        <Announcement announcement={fakeAnnouncement} />
      </Router>,
    );
    const title = screen.getByText(fakeAnnouncement.title);
    const boardName = screen.queryByText(fakeAnnouncement.boardName);
    const commentsText = screen.getByText(`[${fakeAnnouncement.comments.length} comments]`);

    // then
    expect(title).toBeInTheDocument();
    expect(boardName).not.toBeInTheDocument();
    expect(commentsText).toBeInTheDocument();
  });

  it('Should properly render announcement with board name', async () => {
    //given

    //when
    render(
      <Router>
        <Announcement announcement={fakeAnnouncement} showBoard={true} />
      </Router>,
    );
    const boardName = screen.queryByText(fakeAnnouncement.boardName);

    // then
    expect(boardName).toBeInTheDocument();
  });

  it('Should properly render open announcement', async () => {
    //given

    //when
    render(
      <Router>
        <Announcement announcement={fakeAnnouncement} isOpen={true} />
      </Router>,
    );
    const commentsText = screen.queryByText(`[${fakeAnnouncement.comments.length} comments]`);
    const content = screen.getByText(/Vestibulum sodales quis felis eget facilisis/i);

    // then
    expect(content).toBeInTheDocument();
    expect(commentsText).not.toBeInTheDocument();
  });
});
