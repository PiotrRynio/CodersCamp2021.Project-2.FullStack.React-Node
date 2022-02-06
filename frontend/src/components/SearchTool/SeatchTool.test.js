import { render, screen } from '@testing-library/react';
import { SearchTool } from './SearchTool';

describe('Search Tool', () => {
  render(<SearchTool />);
  it('Should properly render components', async () => {
    // GIVEN
    const select = screen.getByRole('select');

    // THEN
    expect(select.length).toBe(1);

    expect(select).toBeInTheDocument();
  });
});
