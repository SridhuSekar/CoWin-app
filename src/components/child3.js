import React, { Component } from "react";
import "../CssFiles/table.css";
class Child3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivedData: [],
    };
  }

  /*  componentDidUpdate() {
    debugger;
    const fetchedProps1 = this.props.rowData;
    console.log("fetched child3", fetchedProps1);
    // this.setState({arrivedData: this.props.datum})
  } */

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { rowData } = this.props;
    console.log("caaaaaaaaa= ", JSON.stringify(rowData.sessions));
    return (
      <tr key={rowData.center_id}>
        <td>{rowData.center_id}</td>
        <td>{rowData.district_name}</td>
        <td>{rowData.block_name}</td>
      </tr>
    );
  }
}

export default Child3;
