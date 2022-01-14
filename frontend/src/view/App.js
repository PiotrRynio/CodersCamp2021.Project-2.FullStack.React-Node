import { Wrapper } from './App.styled';

import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/LeftAside/LeftAside';

function App() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <LeftAside />
      </Wrapper>
    </>
  );
}

export default App;
