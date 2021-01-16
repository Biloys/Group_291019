import React from "react";

export class Header extends React.Component {
  render() {
    console.log(this.props.menuItems);
    const links = [];
    for (let item of this.props.menuItems) {
      const link = <a href={item.ref}>{item.title}</a>;
      links.push(link);
    }
    return (
      <header>
        <div className="logo">LOGO</div>
        <p>{this.props.myMessage}</p>
        <button onClick={() => this.props.clickMeCallBack("thanks for click")}>
          click me
        </button>
        <nav className="list">{links}</nav>
      </header>
    );
  }
}
