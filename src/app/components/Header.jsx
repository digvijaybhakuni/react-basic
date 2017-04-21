import React from "react";
export default class Header extends React.Component {
  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div class="main">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
