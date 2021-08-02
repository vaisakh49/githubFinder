import React from 'react';
import PropTypes from 'prop-types';

export const Repositem = ({ repo2 }) => {
  return (
    <div className='card'>
      <a href={repo2.html_url}>{repo2.name}</a>
    </div>
  );
};

Repositem.propType = {
  repo3: PropTypes.object.isRequired,
};

export default Repositem;
