import React from "react";
import API from "./config/instance";

class Home extends React.Component {
    defaultState = {
      owners: [],
    };
    constructor() {
      super();
      this.listOwner = this.listOwner.bind(this);
      this.state = this.defaultState;
    }
  
    componentDidMount(){
      this.listOwner();
    }
  
    listOwner() {
        API.get("/ltaodataservice/TaxiStands").then(res => {
            console.log(res);
            // let data = res.value;
        });

    //   const data =  API.get("/ltaodataservice/TaxiStands");
    //   console.log(data);
    //     this.setState((state) => {
    //       state.owners = data.value;
    //       return state;
    //     });
    }
  
    render() {
      return (
        <>
          page here
          <ul>
            {/* {this.state.owners.map((o) => {
              return <li>{o.TaxiCode}</li>;
            })} */}
          </ul>
        </>
      );
    }
  }
  
  export default Home;