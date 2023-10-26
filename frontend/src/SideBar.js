import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// image key will have a value as image url once db connection is done
// the value of name key is displayed on hovering over the icons in the sidebar
const sideIcons=[
    {name:"Home",image:require("./images/home.png"),link:"/Home"},
    {name:"Friends",image:require("./images/friends.png"),link:"/Friends"},
    {name:"Create",image:require("./images/create.png"),link:"/Create"},
    {name:"Notifications",image:require("./images/notification.png"),link:"/Notifications"},
    {name:"Message",image:require("./images/message.png"),link:"/Messages"},
    {name:"Profile",image:require("./images/profile.png"),link:"/Profile"},
    {name:"Logout",image:require("./images/logout.png"),link:"Auths"},
]

function SideBarComponent(props){
    const [isHovered,setHovered]=useState(false)
    const handleHover=()=>{
        setHovered(true)
    }
    const handleLeave=()=>{
        setHovered(false)
    }
    const imgStyle={
        width:"60%",
        height:"60%",
        marginTop:"20%",
        marginBottom:"10%",
        marginLeft:"20%",
        overflow: "hidden"
    }
    
    return(
        <div onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <div style={{backgroundColor:isHovered?"#F5F5F5":"white"}}>
            <Link to={props.link}>
                <img src={props.image} style={imgStyle}></img>
            </Link>
            </div>
            <p style={{display:isHovered?"block":"none", marginLeft:"10px"}}>{props.name}</p>
        </div>
    )
}

// thi file implements the side bar you see in instagram web on you laptop.
export function SideBar(){
    const listOfIcons=sideIcons.map((ele,pos)=>{
        return <SideBarComponent image={ele.image} name={ele.name} key={pos}></SideBarComponent>
    })

    return(
        <div style={{border:"2px solid black"}}>
            {listOfIcons}
        </div>
    )
}