import React from "react";
import { Header } from "./Header";
import "./App.scss";
export class App extends React.Component {
  constructor() {
    super();
    this.state = { time: 0 };
  }
  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }
  render() {
    const globalMenuItems = [
      {
        title: "Home",
        ref: "https://google.com",
      },
      {
        title: "Unsplash",
        ref: "https://unsplash.com/",
      },
      {
        title: "facebook",
        ref: "https://www.facebook.com/",
      },
    ];

    return (
      <div className="app">
        <Header
          menuItems={globalMenuItems}
          clickMeCallBack={(text) => {
            alert(text);
          }}
          myMessage="Its props from parent"
        />
        <h1>{this.state.time}</h1>
        <button onClick={() => this.start()}>start</button>
        <button onClick={() => this.stop()}>stop</button>
      </div>
    );
  }

  start() {
    this.setState({ time: this.state.time + 1 });
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
      console.log(this.state.time);
    }, 1000);
  }
  stop() {
    this.setState({ time: 0 });
    clearInterval(this.interval);
  }
}
