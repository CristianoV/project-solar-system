import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
// import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName="Nome" planetImage="https://t2.ea.ltmcdn.com/pt/posts/9/7/3/cachorro_pode_comer_maca_22379_orig.jpg" />
      </div>
    );
  }
}

export default SolarSystem;
