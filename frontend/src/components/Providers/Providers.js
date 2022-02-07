import { QueryClient, QueryClientProvider } from 'react-query';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyles';

export const UserContext = createContext({});

export const Providers = ({ children }) => {
  const queryClient = new QueryClient();
  const [user, setUser] = useState({ loggedIn: true });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </UserContext.Provider>
  );
};
