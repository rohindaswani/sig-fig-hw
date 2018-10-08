import React from 'react';

const FormError = (props) => {

  return(
    <div className="formErrors">
      {Object.keys(props.formErrors).map((name, index) => {
        if (props.formErrors[name].length > 0){
          return(
            <p key={index}>{name} {props.formErrors[name]}</p>
          )
        } else {
          return '';
        }
      })
      }
    </div>
  )
};

export default FormError;