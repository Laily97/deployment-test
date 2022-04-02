import React from "react";

class Child1 extends React.Component{

    render(){
        return(
        <>
            <div style={{display: 'flex'}}>
                <div>
                    <label>Filter 1:</label><br />
                    <select className="form-control">
                        <option>Select </option>
                    </select>
                </div>

                <div>
                    <label>Filter 2:</label><br />
                    <select className="form-control">
                        <option>Select </option>
                    </select>
                </div>
            </div>
            <div>
                <ul>
                    {this.props.listTaxi.map((row, id) => {
                    return <li key={id}>Taxi Code: {row.TaxiCode}</li>;
                    })}
                </ul>
            </div>
        </>
        )
    }
}

export default Child1