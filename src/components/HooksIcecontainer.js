import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";
 function HooksIcecontainer(props){
    
     return(
         <div>
             <h1>Number Of icecreams-{props.numberOfIcecreams}</h1>
             <button onClick={props.buyIceCream()}>Buy iceCream</button>
         </div>
     )
 }
 const mapStateToProps=state=>{
    return{
        numberOfIcecreams:state.iceCream.numberOfIcecreams
    }
 }
 const mapDispatchToprops=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream)
    }
 }
export default connect(mapStateToProps,mapDispatchToprops)(HooksIcecontainer)