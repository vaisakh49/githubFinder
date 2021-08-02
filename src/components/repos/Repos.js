import React from 'react';
import PropTypes from 'prop-types';
import Repositem from './Repositem';

export const Repos = ({ repos1 }) => {
  return repos1.map((repo) => <Repositem repo2={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos2: PropTypes.array.isRequired,
};

export default Repos;
