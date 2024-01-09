import React from 'react';

const Alert = (props) => {
  return (
    props.alert && (
      <div className=" d-flex justify-content-center mt-2 position-absolute start-50 translate-middle">
        <div className={`alert alert-${props.alert.type} fade show`} role="alert">
          <strong className='text-success fs-5'>{props.alert.message}</strong> 
        </div>
      </div>
    )
  );
};

export default Alert;
