import React from "react";
import { useState } from "react";
import { SideBar } from "./SideBar";
import { Link } from "react-router-dom";


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

const posts=[
    {friend:"SigmaUser210",url:require("./images/mountain.jpg"),likes:5,caption:"These files decompress back to thed PCs, but they don’t hold time codes, so they’re not as useful for editing and mixing.    ",time:""},
    {friend:"SigmaUser210",url:require("./images/road.jpg"),likes:5,caption:"do a get req to backend and fetch stories",time:""},
    {friend:"SigmaUser210",url:require("./images/notification.png"),likes:5,caption:"do a get req to backend and fetch stories",time:""},
]   

function GetComments(){

}


function GetStories(){
    // do a get req to backend and fetch stories, make sure to send user_id stored in browser localStorage
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

function PostStyle(props){
    const [showComment,setShowComments]=useState(false)
    const divStyle={
        borderRadius:"5px",
        display:"grid",
        gridTemplateRows:"5% 60% 25% 10%",
        maxHeight:'650px',
        border:"3px solid black"
    }

    const buttonStyle={
        width:"20%",
        borderRadius:"5px",
        marginLeft:"20px",
        marginTop:"1.5%"
    }

    const commonDiv={
        border:"2px solid black",
        // borderRadius:"5px",
        fontSize:"20px",
        paddingLeft:"10px"
    }

    const CommentDiv={
        display:"grid",
        gridTemplateColumns:"50% 50%",
        height:"500px",
    }

    const inpStyle={
        // try to use percentages like this as much as possible, so that UI is consistent across our systems
        width:"80%",
        height:"30px",
        borderRadius:"20px",
        marginTop:"5px",
        marginLeft:"10px"
    }

    const handleLikes=()=>{

    }

    const handleComments=()=>{
        setShowComments(true)
        console.log("here")
    }

    const handleNewComment=()=>{

    }

    return(
        <div>
            {showComment
                ?
                <div style={CommentDiv}>
                    <img src={props.url} style={{width:"100%",height:"100%"}}></img>
                    <div style={{display:"grid",gridTemplateRows:"80% 20%"}}>
                        <div style={{paddingLeft:"10px",fontSize:"20px",overflowY:"scroll",border:"1px solid black",height:"400px"}}>
                            <em><b>{props.friend}</b></em> : {props.caption}
                        </div>
                        <div style={{textAlign:"center",border:"1px solid black"}}>
                            <form onSubmit={handleNewComment}>
                                <input placeholder="Enter Comment" style={inpStyle}></input><br></br>
                                <button style={buttonStyle}>Go back to Post</button>
                                <button style={buttonStyle} type="submit">Add Comment</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
                :
                <div style={divStyle}>
                    <div style={commonDiv}><b><em>{props.friend}</em></b></div>
                    <div>
                        <img src={props.url} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div style={{...commonDiv,overflowY:"scroll"}}>
                        <p>{props.caption}</p>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"50% 50%",textAlign:"center",fontSize:"20px",}}>
                        <div onClick={handleLikes}    style={{border:"1px solid black"}}><p>Likes : {props.likes}</p></div>
                        <div onClick={handleComments} style={{border:"1px solid black"}}><p>Comments</p></div>
                    </div>
                </div>
                
            }
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
        gridTemplateColumns:"5% 17% 60% 18%",
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
            <Link to={'/stories'}>
                <img src={ele.profile_pic} style={imgStyle}></img>
            </Link>
            <p><em><b>{ele.friend.slice(0,11)}</b></em></p>
        </div>
    })

    const postDiv=posts.map((ele,pos)=>{
        return <div><PostStyle url={ele.url} friend={ele.friend} key={ele.pos} 
        likes={ele.likes} caption={ele.caption} time={ele.time}></PostStyle><br/><br/></div>
    })

    return(
        <div style={divStyle}>
            <SideBar/>
            <div></div>
            <div>
                <div style={containerStyle}>
                    {storyDiv}
                </div>
                <br></br>
                <div>{postDiv}</div>
            </div>
            <div></div>
        </div>
    )                                                                                                                                                                                                                   
}