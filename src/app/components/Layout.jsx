import React from "react";
import Header from "./Header.jsx"
import Container from "./Container.jsx"
import { Link } from "react-router";
import Nav from "./Nav.jsx";

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    //muiTheme={getMuiTheme(darkBaseTheme)}
    return (
      <MuiThemeProvider >
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
      </MuiThemeProvider>
    );
  }
}
