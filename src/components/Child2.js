import React, { Component } from "react";
import Child3 from "./child3";
import "../CssFiles/table.css";

class Child2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    //  debugger
    const fetchedContent = this.props.content;

    console.log("this content is from c2", fetchedContent);
  }

  render() {
    return (
      <div>
        <h1>This data is from Child2 component</h1>
        <table>
          <tr>
            <th>Centre ID</th>
            <th>District Name</th>
            <th>Block name</th>
          </tr>
          {this.props.content.map((e) => (
            <Child3 rowData={e} />
          ))}
        </table>
        <div></div>
      </div>
    );
  }
}

export default Child2;
