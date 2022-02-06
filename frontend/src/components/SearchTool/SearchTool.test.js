import { render, screen } from '@testing-library/react';
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

    // THEN
    expect(title).toBeInTheDocument();
  });
});
