import { fireEvent, waitFor, render, screen, waitForElement } from '@testing-library/react';
import { SearchTool } from './SearchTool';
import { Providers } from '../Providers/Providers';

describe('Search Tool', () => {
  it('Should properly render components', async () => {
    render(
      <Providers>
        <SearchTool />
      </Providers>,
    );
    // GIVEN
    const title = screen.getByText('Explore!');
    const placeholder = screen.getByText('Search...');
    // THEN
    expect(title).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
  });
  it('Component should not show options after render', async () => {
    render(
      <Providers>
        <SearchTool />
      </Providers>,
    );
    //GIVEN
    const option = screen.queryAllByTestId('option');

    //THEN
    expect(option).toHaveLength(0);
  });
});
