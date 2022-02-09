import { render, screen } from 'test-utils';
import AnnouncementIcon from './AnnouncementIcon';

describe('AnnouncementIcon', () => {
  it('properly render default icon', () => {
    //when
    render(<AnnouncementIcon />);
    const receivedIcon = screen.getByRole('default-icon');

    //then
    expect(receivedIcon).toBeInTheDocument();
  });

  it('properly render another than default icon', () => {
    //when
    render(<AnnouncementIcon iconType={'pets'} />);
    const receivedIcon = screen.getByRole('pets-icon');

    //then
    expect(receivedIcon).toBeInTheDocument();
  });

  it('show default icon when wrong value is set', () => {
    //when
    render(<AnnouncementIcon iconType={'wrongValue'} />);
    const receivedIcon = screen.getByRole('default-icon');

    //then
    expect(receivedIcon).toBeInTheDocument();
  });

  it('should be inside div', () => {
    //given
    render(<AnnouncementIcon />);

    //when
    const receivedElement = screen.getByRole('icon-container');

    //then
    expect(receivedElement).toBeInTheDocument();
    expect(receivedElement.children).toHaveLength(1);
  });
});
