import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      // creates array with as many elements as current ingredient
      return [...Array(props.ingredients[ingKey])]
        .map((_, idx) => {
          return <BurgerIngredient key={ingKey + idx} type={ingKey} />;
      });
    })
    // Flattens the array to calculate the size of all ingredients
    .reduce((resultingArr, curr_el) => {
      return resultingArr.concat(curr_el)
    }, []);
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
