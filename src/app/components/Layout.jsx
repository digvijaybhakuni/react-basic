import React from "react";
import Header from "./Header.jsx"
import Container from "./Container.jsx"
import { Link } from "react-router";
import Nav from "./Nav.jsx";
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
    console.log(this.props)
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Nav/>
        <div class="dyna content container">
          {this.props.children}
        </div>
        <div class="old-baisc">
          <Header title={this.state.title}/>
          <Container changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        </div>
      </div>
    );
  }
}
