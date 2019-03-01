import React from 'react';
import classes from './BuildEachControl.css';

const buildEachControl = (props) => (
  <div className={classes.BuildEachControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className ={classes.Less}
      onClick   ={props.removed}
      disabled  ={props.disabled}>Less</button>
    <button
      className ={classes.More}
      onClick   ={props.added}>More</button>
  </div>
);

export default buildEachControl;
