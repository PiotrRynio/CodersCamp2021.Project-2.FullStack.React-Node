import TopBar from '../components/Topbar/TopBar';
import Navigation from '../components/Navigation/Navigation';
import RightSide from '../components/RightSide/RightSidebar';
import { MainSection } from './App/App.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <TopBar />
      <Navigation />
      <RightSide />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
};

export default Layout;
