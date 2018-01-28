import React from 'react';

const Button = (props) => (
  <div>
    <button type={props.type} className={props.class}>{props.value}</button>
  </div>
);

export default Button;