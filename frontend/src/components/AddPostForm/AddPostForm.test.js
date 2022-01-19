import { render, screen } from '@testing-library/react';
import AddPostForm from './AddPostForm';

describe('AddPostForm', () => {
  render(<AddPostForm />);
  it('Should render basic form components', async () => {
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Check if there are two inputs
    expect(inputs.length).toBe(2);

    // Check if they exists on webpage
    inputs.map((input) => {
      return expect(input).toBeInTheDocument();
    });

    // Check if the button exists
    expect(button).toBeInTheDocument();
  });
});
