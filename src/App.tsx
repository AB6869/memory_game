import React from 'react';
import Cards from './components/Cards';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Header>Color Memory Game</Header>
      <Cards />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`
const Header = styled.div`
  font-size: 45px;
  padding: 20px;
`

export default App;
