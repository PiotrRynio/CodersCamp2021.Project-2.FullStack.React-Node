import React from 'react';
import { createContext, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Container } from './AppProviders.styled';
import { GlobalStyle } from '../assets/styles/GlobalStyles';

const queryClient = new QueryClient();
export const UserContext = createContext({});

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({ loggedIn: true });
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <QueryClientProvider client={queryClient}>
          <Container>
            <GlobalStyle>
              <Routes>{children}</Routes>
            </GlobalStyle>
          </Container>
        </QueryClientProvider>
      </UserContext.Provider>
    </Router>
  );
};

export default AppProviders;
