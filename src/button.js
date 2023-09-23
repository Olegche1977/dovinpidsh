import React from "react";
import { useState } from "react";

function Button(){

const [stateBearings, setStateBearings] = useState(0);
const image = "./bearing_1.jpg";
const arr = [1,1,1];

function buttonClick(){
    console.log('click');
    
    // let flag = stateBearings+1;
    // console.log(arr);
    // console.log(stateBearings);
    // arr.push(stateBearings);
    // setStateBearings(flag);

    setStateBearings(true)

}
    return <div>
        <button className="button1" onClick={()=> buttonClick()}>Buy bearings</button>
        {stateBearings? arr.map(elem => <img src={image} className="bearing_image" alt="bearing1" />):<h3>no bearings</h3>}
    
    </div>
}

export default Button