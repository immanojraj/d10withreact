import React from "react";
import Layoutitem from "./LayoutsItem";

class LayoutsList extends React.Component {


    constructor(props){
        super(props);
        console.log("render inside constructor")
    }


    render(){
        let { data } = this.props;
        console.log("inside render");

        return(
            <div className="App">
                <h1>This comes from Drupal API ! Yaay :) </h1>
                {data !== null &&
                data !== undefined &&
                data.length > 0 ? data.map(item => <Layoutitem {...item} key={item.id}/>) : <div>No Drupal Content found.</div>
                }
            </div>
        )
    }
}

export default LayoutsList;