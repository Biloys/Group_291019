import React from "react";

export class Meals extends React.Component {
  render() {
    const ingridients = [];
    for (let i = 0; i < 20; i++) {
      const key = "strIngredient" + i;
      const measureKey = "strMeasure" + i;
      const el = (
        <li>
          {this.props.meal[key]} - {this.props.meal[measureKey]}
        </li>
      );
      ingridients.push(el);
    }
    console.log(ingridients);
    return (
      <div>
        <h2 className="recipe__title">{this.props.meal.strMeal}</h2>
        <p className="recipe__instruction">{this.props.meal.strInstructions}</p>

        <div>{ingridients}</div>
      </div>
    );
  }
}
