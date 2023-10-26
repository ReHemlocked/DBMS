import React from "react";
import { useState } from "react";
import { SideBar } from "./SideBar";


const username="LuckyBird"
const stories=[
    {friend:"SigmaUser210",profile_pic:require("./images/sigma.jpg")},
    {friend:"magnus.martensson1",profile_pic:require("./images/magnus.jpg")},
    {friend:"nadja.nilsson1",profile_pic:require("./images/nadja.jpg")},
    {friend:"DeltaUser001",profile_pic:require("./images/delta.jpg")},
    {friend:"NuUser987",profile_pic:require("./images/NuUser.jpg")},
    {friend:"nadja.nilsson1",profile_pic:require("./images/nadja.jpg")},
    {friend:"DeltaUser001",profile_pic:require("./images/delta.jpg")},
    {friend:"NuUser987",profile_pic:require("./images/NuUser.jpg")},
]


function getStories(){
     return(
        <div>
            {stories.map((ele,pos)=>{
                return <div key={pos}>
                    <img src={ele.profile_pic}></img>
                    <em>{ele.friend}</em>
                </div>
            })}
        </div>
     )
}

export function Home(){

    const imgStyle={
        width:"80px",
        height:"80px",
        borderRadius:"50px",
        border:"5px solid black"
    }

    const divStyle={
        display:"grid",
        gridTemplateColumns:"5% 10% 75% 10%"
      }
    
      const containerStyle={
        overflowX: "auto", 
        width: "100%", 
        height: "30vh", 
        whiteSpace: "nowrap",
      }
    
    const storyDivStyle={
        display:"inline-block",
        marginTop:"1%",
        marginLeft:"5%",
        overFlowX:"scroll",
        whiteSpace: "nowrap",
    }
    
    const storyDiv=stories.map((ele,pos)=>{
        return <div key={pos} style={storyDivStyle}>
            <img src={ele.profile_pic} style={imgStyle}></img>
            <p><em><b>{ele.friend.slice(0,11)}</b></em></p>
        </div>
    })

    return(
        <div style={divStyle}>
            <SideBar/>
            <div></div>
            <div style={containerStyle}>
                {storyDiv}
            </div>
            <div></div>
        </div>
    )                                                                                                                                                                                                                   
}