import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BurgerControls/BurgerControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 1.0
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => sum + el ,0);
    this.setState({purchaseable: sum>0});
  };

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIng = {
      ...this.state.ingredients
    };
    updatedIng[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIng
    });
    this.updatePurchaseState(updatedIng);
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
      return;
    }
    const newCount =  oldCount - 1;
    const updatedIng = {
      ...this.state.ingredients
    };
    updatedIng[type] = newCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIng
    });
    this.updatePurchaseState(updatedIng);
  }
  render() {
    const disabledInfo = {...this.state.ingredients };
    for(let key in disabledInfo){
      // Makes boolean arr
      disabledInfo[key] = disabledInfo[key]<=0
    }
    return (
      <Aux>
      <h1>Your Total Price is ${this.state.totalPrice.toFixed(2)}</h1>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}/>
        </Aux>
    );
  }
}


export default BurgerBuilder;
