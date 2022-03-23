import { QueryClient, QueryClientProvider } from 'react-query';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import avatar1 from 'mocks/images/avatars/sample-avatar1.jpg';

export const UserContext = createContext({});

export const AppProviders = ({ children }) => {
  const queryClient = new QueryClient();
  const [user, setUser] = useState({
    userId: 1,
    loggedIn: true,
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg',
    firstName: 'John',
    lastName: 'Doe',
  });

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
