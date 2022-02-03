import { render, screen } from '@testing-library/react';
import PostAddingForm from './PostAddingForm';

describe('PostAddingForm', () => {
  render(<PostAddingForm />);
  it('Should render basic form components', async () => {
    // GIVEN
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // THEN
    expect(inputs.length).toBe(2);

    inputs.map((input) => {
      return expect(input).toBeInTheDocument();
    });

    expect(button).toBeInTheDocument();
  });
});
