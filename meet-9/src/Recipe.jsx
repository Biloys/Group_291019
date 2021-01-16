import React from "react";
import { Meals } from "./meals";

export class Recipe extends React.Component {
  constructor() {
    super();
    this.state = { meals: {} };
  }
  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.meals[0]);
        this.setState({ meals: data.meals[0] });
      });
  }
  render() {
    return (
      <div className="recipe">
        <h1 className="title">Feeling hungry?</h1>
        <h2 className="subtitle">Get a random meal by clicking below</h2>
        <button className="btn" onClick={() => this.componentDidMount()}>
          Get Meal
        </button>
        <Meals meal={this.state.meals} />
      </div>
    );
  }
}
