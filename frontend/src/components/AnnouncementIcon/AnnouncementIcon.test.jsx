import { render, screen } from 'test-utils';
import AnnouncementIcon from './AnnouncementIcon';

describe('AnnouncementIcon', () => {
  it('properly render default icon', () => {
    //when
    render(<AnnouncementIcon />);
    const receivedIcon = screen.getByLabelText('default icon');

    //then
    expect(receivedIcon).toBeInTheDocument();
  });

  it('properly render another than default icon', () => {
    //when
    render(<AnnouncementIcon iconType={'pets'} />);
    const receivedIcon = screen.getByLabelText('pets icon');

    //then
    expect(receivedIcon).toBeInTheDocument();
  });

  it('show default icon when wrong value is set', () => {
    //when
    render(<AnnouncementIcon iconType={'wrongValue'} />);
    const receivedIcon = screen.getByLabelText('default icon');

    //then
    expect(receivedIcon).toBeInTheDocument();
  });

  it('should render styled div with one item', () => {
    //given
    render(<AnnouncementIcon />);

    //when
    const receivedElement = screen.getByLabelText('icon container');

    //then
    expect(receivedElement).toBeInTheDocument();
    expect(receivedElement.children).toHaveLength(1);
  });
});
