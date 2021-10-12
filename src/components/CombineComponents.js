import React, { Component } from "react";
import Child2 from "./Child2";
import DropDown from "./DropDown";

export class CombineComponents extends Component {
  constructor() {
    super();
    this.template = "haiiiiiiiiii";
    this.state = {
      childResponse: [],
    };
  }

  passingFunctionToChild(props) {
    console.log(this);
    this.setState({ childResponse: props });
  }

  render() {
    return (
      <div>
        <h1>Combine Class</h1>

        <DropDown onSelectLanguage={this.passingFunctionToChild.bind(this)} />
        <Child2 content={this.state.childResponse} />
      </div>
    );
  }
}

export default CombineComponents;
