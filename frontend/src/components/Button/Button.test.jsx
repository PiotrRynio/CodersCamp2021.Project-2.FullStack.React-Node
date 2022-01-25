import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'components/Button/Button';

describe('Button', () => {
  it('properly render component', () => {
    //when
    render(<Button buttonName={'SampleButtonName'} />);
    const receivedComponentText = screen.getByText('SampleButtonName');
    const receivedComponentByRole = screen.getByRole('button');

    //then
    expect(receivedComponentText).toBeInTheDocument();
    expect(receivedComponentByRole).toBeInTheDocument();
  });
  it('properly calls callback after click', () => {
    //given
    const mockCallback = jest.fn();

    //when
    render(<Button callback={mockCallback} buttonName={'SampleButtonName'} />);
    const button = screen.getByText('SampleButtonName');
    fireEvent.click(button);

    //then
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
