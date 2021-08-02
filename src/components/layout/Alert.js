import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert1 } = alertContext;
  return (
    alert1 !== null && (
      <div className={`alert alert-${alert1.type}`}>
        <i className='fas fa-info-circle'>{alert1.msg}</i>
      </div>
    )
  );
};

export default Alert;
