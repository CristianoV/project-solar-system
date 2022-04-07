import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

const headline = {
  nome: 'Planetas',
};

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title headline={ headline.nome } />
      </>
    );
  }
}

export default App;
