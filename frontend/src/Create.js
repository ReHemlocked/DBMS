import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Link } from "react-router-dom";

const fileTypes = ["JPG", "PNG", "GIF"];

// this file handles creation of posts
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
        marginTop:"5%",
        // textAlign:"center",
    }

    const txtAreaStyle={
        marginTop:"40px",width:"90%",height:"250px",fontSize:"20px",borderRadius:"10px"
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


    return (
        <div>
            <br/><br/>
            {
                disp
                ?
                    <div style={postStyle}>
                        <img src={URL.createObjectURL(file)} style={{width:"100%",height:"100%"}}></img>
                        <div style={{padding:"20px",fontSize:"20px"}}>
                            <div>
                                {caption}
                                {/* <input type="text" placeholder="Add Comments" style={{width:"50%",borderRadius:"20px",height:"30px"}}></input> */}
                                <br/><br/>
                                <button style={{width:"30%",height:"30px",borderRadius:"5px"}} onClick={handleClick}>Go back to Editing</button>
                            </div>
                        </div>
                    </div>
                :
                    <div style={divStyle}>
                        <form onSubmit={handleSubmit}>
                            <div >
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
                        </form>
                    </div>
            }
        </div>
    );
  }
  