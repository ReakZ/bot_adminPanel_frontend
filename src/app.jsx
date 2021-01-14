import React from "react";

import Menu from "./menu";

import Content from "./content";


export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
          <Menu />
          <Content />

      </div>
      </div>
    );
  }
}