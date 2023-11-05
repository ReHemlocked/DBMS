import React from "react";
import { useState } from "react";


friends=[
    {user_id:"",username:"HappyCat",pic:""},
    {user_id:"",username:"SunnyDog",pic:""},
    {user_id:"",username:"GammaUser789",pic:""},
    {user_id:"",username:"DeltaUser001",pic:""},
]

export function messaging(){
    const divStyle={
        display:"grid",
        gridTemplateColumns:"30% 70%",

    }

    const innerDiv={
        border:"2px solid black"
    }

    const listOfFriends={}
    const listofGroups={}

    return(
        <div>
            <div style={innerDiv}>
                {listOfFriends}
                {listofGroups}
            </div>
            <div style={innerDiv}>

            </div>
        </div>
    )
}