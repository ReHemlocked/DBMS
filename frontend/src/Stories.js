import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

// var i=1
const stories=[
    {userId:"",url:require("./images/black.jpg"),imOrVid:0},
    {userId:"",url:require("./videos/1.mp4"),imOrVid:1},
    {userId:"",url:require("./videos/2.mp4"),imOrVid:1},
    {userId:"",url:require("./images/mountain.jpg"),imOrVid:0},
    {userId:"",url:require("./images/road.jpg"),imOrVid:0},
    {userId:"",url:require("./images/black.jpg"),imOrVid:0},
]

  

export function GetStories(){
    const [i, setI] = useState(2);

    const handleKeyPress = (event) => {
        if (event.key === 'ArrowRight') 
        {
          var len=stories.length
          setI((prevI)=>(prevI==len-2? 1 : prevI+1))
        } 
        else if(event.key === 'ArrowLeft')
        {
          var len=stories.length
          setI((prevI)=>(prevI==1? len-2 : prevI-1))
        }
        else 
        {
          setI(i);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
          window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    

    const outerDivStyle={
        display:"grid",
        gridTemplateColumns:"33% 33% 33%",
        marginLeft:"5px",
        marginTop:"2%",
        height:"550px",
        // backgroundColor:"black"
    }

    const divStyle={
        marginLeft:"20px",
        border:"1px solid black"
    }

    const imgStyle={
        width:"100%",height:"100%"
    }

    const buttonStyle={
        width:"10%",
        height:"40px",
        borderRadius:"5px",
        marginLeft:"20px",
        marginTop:"20px",
        fontSize:"20px"
    }

    return(
        <div style={{textAlign:"center"}}>
            <div style={outerDivStyle}>
                {
                    <>
                        <div style={divStyle}>
                            <img style={{  ...imgStyle,display:stories[i-1].imOrVid?"none":"block",filter:"blur(6px)"}} src={stories[i-1].url}></img>
                            <video style={{...imgStyle,display:stories[i-1].imOrVid?"block":"none",filter:"blur(6px)"}} 
                            src={stories[i-1].url} controls></video>
                        </div>
                        <div style={{...divStyle,position:"relative",zIndex:"5"}}>
                            <img style={{  ...imgStyle,display:stories[i].imOrVid?"none":"block"}} src={stories[i].url}></img>
                            <video style={{...imgStyle,display:stories[i].imOrVid?"block":"none"}} 
                            src={stories[i].url} controls autoPlay></video>
                        </div>
                        <div style={divStyle}>
                            <img style={{  ...imgStyle,display:stories[i+1].imOrVid?"none":"block",filter:"blur(5px)"}} src={stories[i+1].url}></img>
                            <video style={{...imgStyle,display:stories[i+1].imOrVid?"block":"none",filter:"blur(5px)"}} 
                            src={stories[i+1].url} controls></video>
                        </div>
                    </>
                }
            </div>
            <br></br>
            <Link to="/home">
                <button style={buttonStyle}>Home</button>
            </Link>
        </div>
    )
}

