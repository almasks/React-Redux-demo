import React ,{useState}from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";
 function HooksIcecontainer(props){
    const [number,setNumber] =useState(1)
     return(
         <div>
             <h1>Number Of icecreams-{props.numberOfIcecreams}</h1>
             <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
             <button onClick={()=>props.buyIceCream(number)}>Buy {number}iceCream</button>
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
        buyIceCream:number=>dispatch(buyIceCream(number))
    }
 }
export default connect(mapStateToProps,mapDispatchToprops)(HooksIcecontainer)