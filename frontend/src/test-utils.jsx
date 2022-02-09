import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppProviders } from 'providers/AppProviders';

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <AppProviders>{children}</AppProviders>
    </MemoryRouter>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
