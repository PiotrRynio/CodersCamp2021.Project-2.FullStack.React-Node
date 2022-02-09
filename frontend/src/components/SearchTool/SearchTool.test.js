import { render, screen } from '@testing-library/react';
import { SearchTool } from './SearchTool';
import { AppProviders } from '../../providers/AppProviders';

describe('Search Tool', () => {
  it('Should properly render components', async () => {
    render(
      <AppProviders>
        <SearchTool />
      </AppProviders>,
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
      <AppProviders>
        <SearchTool />
      </AppProviders>,
    );
    //GIVEN
    const option = screen.queryAllByTestId('option');

    //THEN
    expect(option).toHaveLength(0);
  });
});
