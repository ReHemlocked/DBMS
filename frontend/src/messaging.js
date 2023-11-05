import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const friends=[
    {name:"akshar",user_id:"",username:"HappyCat",    pic:require("./images/magnus.jpg")},
    {name:"akshar",user_id:"",username:"SunnyDog",    pic:require("./images/nadja.jpg")},
    {name:"akshar",user_id:"",username:"GammaUser789",pic:require("./images/delta.jpg")},
    {name:"akshar",user_id:"",username:"DeltaUser001",pic:require("./images/NuUser.jpg")},
    {name:"akshar",user_id:"",username:"HappyCat",    pic:require("./images/magnus.jpg")},
    {name:"akshar",user_id:"",username:"SunnyDog",    pic:require("./images/nadja.jpg")},
    {name:"akshar",user_id:"",username:"GammaUser789",pic:require("./images/delta.jpg")},
    {name:"akshar",user_id:"",username:"DeltaUser001",pic:require("./images/NuUser.jpg")},
    {name:"akshar",user_id:"",username:"HappyCat",    pic:require("./images/magnus.jpg")},
    {name:"akshar",user_id:"",username:"SunnyDog",    pic:require("./images/nadja.jpg")},
    {name:"akshar",user_id:"",username:"GammaUser789",pic:require("./images/delta.jpg")},
    {name:"akshar",user_id:"",username:"DeltaUser001",pic:require("./images/NuUser.jpg")},
]

const chats=[
    {user_id1:"",user_id2:"",text:"good morning good morning good morninggood morninggood morning",time:"",oneOrTwo:false},
    {user_id1:"",user_id2:"",text:"How are u",time:"12:30",oneOrTwo:true},
    {user_id1:"",user_id2:"",text:"Fine",time:"",oneOrTwo:false},
    {user_id1:"",user_id2:"",text:"Ok",time:"",oneOrTwo:true},
    {user_id1:"",user_id2:"",text:"See u",time:"",oneOrTwo:false},
    {user_id1:"",user_id2:"",text:"Bye",time:"",oneOrTwo:false},
    {user_id1:"",user_id2:"",text:"good morning good morning good morninggood morninggood morning",time:"",oneOrTwo:true},
    {user_id1:"",user_id2:"",text:"How are u",time:"12:30",oneOrTwo:true},
    {user_id1:"",user_id2:"",text:"Fine",time:"",oneOrTwo:false},
    {user_id1:"",user_id2:"",text:"Ok",time:"",oneOrTwo:true},
    {user_id1:"",user_id2:"",text:"See u",time:"",oneOrTwo:false},
    {user_id1:"",user_id2:"",text:"Bye",time:"",oneOrTwo:false},
]

// function ChatTemplate()

function RetrieveChats(){
    const chatStyle={
        fontSize:"20px",
        backgroundColor:"#D3D3D3",
        marginTop:"10px",
        width:"40%",
        borderRadius:"5px",
        padding:"10px"
    }
    return(
        <div>
            {chats.map((chat,pos)=>{
                return <div style={{...chatStyle,backgroundColor:chat.oneOrTwo?"#98FB98":"#D3D3D3",
                marginLeft:chat.oneOrTwo?"50%":"0%"}}>
                    {chat.text}
                    <br></br>
                    {chat.time}
                </div>
            })}
        </div>
    )
}

function Friend(props){
    const [hover,setHover]=useState(false)
    const imgStyle={
        width:"80px",
        height:"80px",
        borderRadius:"50px",
        border:"3px solid black",
    }

    return(
        <div style={{border:"1px solid black",backgroundColor:hover?"#F5F5FF":"white",display:"grid",
        gridTemplateColumns:"30% 70%",padding:"5px"}} key={props.key} 
        onMouseOver={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <img src={props.pic} style={imgStyle}></img>
            <div>
                <p style={{fontSize:"25px",margin:"0 auto"}}><b>{props.username}</b></p>
                <p style={{fontSize:"25px",margin:"0 auto"}}>{props.name}</p>
            </div>
        </div>
    )
}

export function Messaging(){
    const divStyle={
        display:"grid",
        gridTemplateColumns:"35% 65%",
        height:"100vh",
        width:"100vw",

    }

    const innerDiv={
        border:"1px solid black",
        overflowY:"scroll",
        cursor:"pointer",
    }

    const chatsDiv={
        display:"grid",
        gridTemplateRows:"90vh 10vh"
    }

    const inpStyle={
        // try to use percentages like this as much as possible, so that UI is consistent across our systems
        width:"80%",
        height:"50px",
        borderRadius:"5px",
        // marginTop:"1%",
        fontSize:"20px"
    }

    const listOfFriends=friends.map((friend,pos)=>{
        return(
            <Friend username={friend.username} name={friend.name} pic={friend.pic} key={pos}></Friend>
        )
    })
    const listofGroups={}

    return(
        <div style={divStyle}>
            <div style={innerDiv}>
                {listOfFriends}
                {/* {listofGroups}  */}
            </div>
            <div style={chatsDiv}>
                <div style={{backgroundColor:"#F5F5FF",overflowY:"scroll",padding:"20px",display:"flex",flexDirection:"column"}}>
                    <Link to="/home">
                        <img src={require("./images/cancel.png")} style={{height:"40px",width:"40px",position:"fixed",marginLeft:"58%"}}></img>
                    </Link>
                    <RetrieveChats></RetrieveChats>
                </div>
                <div style={{border:"1px solid black",padding:"7px"}}>
                    <form>
                        <input placeholder="Type a message" style={inpStyle}></input>
                        <button type="submit" style={{width:"19%",height:"55px",borderRadius:"5px",fontSize:"20px"}}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}