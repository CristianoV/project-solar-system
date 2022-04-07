import React from 'react';
import Title from './Title';

const headline = {
  nome: 'Planetas',
};

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline={ headline.nome } />
      </div>
    );
  }
}

export default SolarSystem;
