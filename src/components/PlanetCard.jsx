import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, key } = this.props;
    return (
      <div data-testid="planet-card" key={ key }>
        <p data-testid="planet-name">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
