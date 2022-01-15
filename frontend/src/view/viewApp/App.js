import React from 'react';
import MainTemplate from '../viewTemplate/MainTemplate';
import MainContent from '../../components/MainContent/MainContent';
import RightSide from '../../components/RightSide/RightSide';

function App() {
  return (
    <>
      <MainTemplate>
        <MainContent />
        <RightSide />
      </MainTemplate>
    </>
  );
}

export default App;
