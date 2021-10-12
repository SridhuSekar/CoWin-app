import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

const stateOptions = [
  { value: "Tamilnadu", label: "Tamilnadu" },
  { value: "Kerala", label: "Kerala" },
];

const districtOptions = [
  { value: "561", label: "Sivaganga", state: "Tamilnadu" },
  { value: "580", label: "Sivakasi", state: "Tamilnadu" },
  { value: "567", label: "Ramanathapuram", state: "Tamilnadu" },
  { value: "546", label: "Pudukkottai", state: "Tamilnadu" },
  { value: "548", label: "Tirunelveli", state: "Tamilnadu" },
  { value: "539", label: "Coimbatore", state: "Tamilnadu" },
  { value: "296", label: "Thiruvananthapuram", state: "Kerala" },
  { value: "303", label: "Thrissur", state: "Kerala" },
  { value: "301", label: "Alappuzha", state: "Kerala" },
  { value: "304", label: "Kottayam", state: "Kerala" },
  { value: "305", label: "Kozhikode", state: "Kerala" },
  { value: "302", label: "Malappuram", state: "Kerala" },
];

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: [],
      selectedState: "",
      selectedDistrict: "",
      dynamicdistrict: [],
      districtvalue: [],
      receivedData: [],
    };
  }

  handleState = (er) => {
    console.log("er.valueeeeeee", er.value);

    // Comparing and filtering
    this.setState({ selectedState: er.value });
    let dynamicdataforDistrict = districtOptions.filter(
      (e) => e.state == er.value
    );

    //filtered  districts
    this.setState({ dynamicdistrict: dynamicdataforDistrict });
    console.log(this.state.dynamicdistrict);
  };

  handleDistrict = (e) => {
    console.log("District", e.value);

    //setting district code to a state
    this.setState({ districtvalue: e.value });
    console.log(this.state.districtvalue);
  };

  handleClick = async () => {
    const datum = await axios.get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${this.state.districtvalue}&date=18-05-2021`
    );

    this.setState({ receivedData: datum.data.centers });
    //////////////////////////////////////////////////////////////////////////////
    let compare1 = datum.data.centers
      .map((e) => {
        return {
          id: e.center_id,
          sessions: e.sessions.filter((f) => f.available_capacity > 0),
        };
      })
      .filter((e) => e.sessions.length);

    let resultArray = datum.data.centers.filter((e1) =>
      compare1.some((e2) => e1.center_id === e2.id)
    );

    console.log(resultArray);

    //////////////////////////////////////////////////////////////////////////////

    //passing to the parent(App.js) through props as an argument to the function in the App.js which sets the parameter to the state defined <check "handleLanguage" function logic in App.js>
    this.props.onSelectLanguage(resultArray);
  };

  render() {
    //separate states only for REACT SELECT
    const { keyStateselect, keyDistrictselect } = this.state;

    return (
      
      <div>
        <div>
          <Select
          placeholder="Select State"
            //handleState's (er):
            value={keyStateselect}
            onChange={this.handleState}
            //static state options:
            options={stateOptions}
          />
        </div>

        <div>
          <Select
          placeholder="Select District"
            //handleState's (e):
            value={keyDistrictselect}
            onChange={this.handleDistrict}
            //Dynamic filtered district options based on selected static state option:
            options={this.state.dynamicdistrict}
          />
          </div>

          <div>
            <button onClick={this.handleClick}>ADD</button>
          </div>
          
          <div>
            {/* <ComponentB  
                        data={this.state.receivedData}
                    /> */}
          </div>
        </div>
      
    );
  }
}

export default DropDown;
