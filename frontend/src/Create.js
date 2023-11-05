import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";
const fileTypes = ["JPG", "PNG", "GIF"];

// this file handles creation of posts

// not neccessary to implement, push to end, use stories.js for ref 
function previewStory(props){
    return(
        <div>
            {props.imOrVid?
                <div></div>:<></>
            }
        </div>
    )
}

function CreateStory(){
    const [isImg,setImg]=useState(false)
    const [file, setFile] = useState(null);
    const [dispStory,setDispStory]=useState(false)

    const handleImgUpload=(file)=>{
        setFile(file)
        const extBegining=file.name.lastIndexOf(".")
        const extension=file.name.substr(extBegining+1)
        if(extension=="mp4") setImg(false)
        else setImg(true)
    }
    const buttonStyle={
        width:"20%",
        height:"30px",
        borderRadius:"5px",
        marginLeft:"20px",
        marginTop:"20px"
    }

    const handlePreview=(e)=>{
        e.preventDefault()
        if(file!=null) setDispStory(true)
        else setDispStory(false)
    }

    return(
        <div>
            <p style={{fontSize:"20px"}}>Upload an image or a video</p>
            <FileUploader handleChange={handleImgUpload} types={["mp4","png","jpg"]}></FileUploader>
            {file?<span>Uploaded {file.name}</span>:<></>}
            <br/><br/>
            <p style={{fontSize:"20px"}}>Upload an audio file(Optional)</p>
            <FileUploader disabled={isImg?false:true}></FileUploader>
            <div style={{textAlign:"center"}}>
                <Link to="/home">
                    <button style={buttonStyle} >Cancel</button>
                </Link>
                <button style={buttonStyle} onClick={handlePreview}>Preview</button>
                <button type="submit" style={buttonStyle}>Create</button>
            </div>
        </div>
    )
}
export function Create() {
    const [file, setFile] = useState(null);
    const [disp,setDisp]=useState(false)
    const [caption,setCaption]=useState("Enter Caption")
    
    const divStyle={
        margin: "0 auto",
        padding: "20px",
        width: "40%",
        // height:"90%",
        borderRadius: "20px",
        boxShadow:"10px 10px 10px 10px rgba(1,1,1,0.5)",
        // marginTop:"3%",
        // textAlign:"center",
    }

    const txtAreaStyle={
        marginTop:"40px",width:"90%",height:"200px",fontSize:"20px",borderRadius:"10px"
    }
    const buttonStyle={
        width:"20%",
        height:"30px",
        borderRadius:"5px",
        marginLeft:"20px",
        marginTop:"20px"
    }

    const postStyle={
        margin: "0 auto",
        width:"70%",
        height:"500px",
        display:"grid",
        gridTemplateColumns:"50% 50%",
        marginTop:"4%",
        boxShadow:"10px 10px 10px 10px rgba(1,1,1,0.5)",
    }

    const handleUpload = (file) => {
        setFile(file)
        console.log(file.name)
    };

    const handlePreview=(e)=>{
        e.preventDefault()
        if(file!=null){
            setDisp(true)
        }
        else{
            alert("The picture must be uploaded before preview feature is enabled")
        }

    }

    const handleCancel=(e)=>{
        e.preventDefault()
        setDisp(false)
        setFile(null)
        console.log("here")
        setCaption("Enter Caption")
        window.location.reload(false)
    }

    const handleChange=(e)=>{
        e.preventDefault()
        setCaption(e.target.value)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        const post={pic:file,caption:caption}
        console.log(post)
    }

    const handleClick=(e)=>{
        e.preventDefault()
        setDisp(false)
        // console.log(caption)
    }

    const [isSign,SetSign]=useState(true)
    // isSign state is set to true if user is registering else is set to false
    const spanStyle={
        display:"inline-block",
        width:"50%",
        height:"30px",
        cursor:"pointer",
        borderRadius:"5px",
        textAlign:"center"
    }

    return (
        <div>
            <br/><br/>
            {
                disp
                ?
                    <div style={postStyle}>
                        <img src={URL.createObjectURL(file)} style={{width:"100%",height:"100%"}}></img>
                        <div style={{padding:"20px",fontSize:"20px"}}>
                            <div style={{overflow:"hidden",overflowY:"auto"}}>
                                <p>{caption}</p>
                                {/* <input type="text" placeholder="Add Comments" style={{width:"50%",borderRadius:"20px",height:"30px"}}></input> */}
                                <br/><br/>
                                <button style={{width:"30%",height:"30px",borderRadius:"5px"}} onClick={handleClick}>Go back to Editing</button>
                            </div>
                        </div>
                    </div>
                :
                    <div style={divStyle}>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div style={{...spanStyle,boxShadow:isSign?"1px 1px 1px 1px":""}} onClick={()=>{SetSign(true)}} >Post</div>
                                <div style={{...spanStyle,boxShadow:isSign?"":"1px 1px 1px 1px"}} onClick={()=>{SetSign(false)}}>Story</div>
                                {/* shadow is added based on whether user is registering or logging in */}
                            </div>
                            <br></br>
                            {isSign?
                                <div>
                                    <div >
                                        <p style={{fontSize:"20px"}}>Upload an image or a video</p>
                                        <FileUploader handleChange={handleUpload} name="file" types={fileTypes}/>
                                        {file?<span>Uploaded {file.name}</span>:<></>}
                                    </div>
                                    <textarea style={txtAreaStyle} onChange={handleChange}>{caption}</textarea>
                                    <div style={{textAlign:"center"}}>
                                        <Link to="/home">
                                            <button style={buttonStyle} >Cancel</button>
                                        </Link>
                                        <button style={buttonStyle} onClick={handlePreview}>Preview</button>
                                        <button type="submit" style={buttonStyle}>Create</button>
                                    </div>
                                </div>
                            :
                                <div>
                                    <CreateStory/>
                                </div>
                            }
                    
                        </form>
                    </div>
            }
        </div>
    );
  }
  