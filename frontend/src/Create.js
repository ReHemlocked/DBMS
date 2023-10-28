import React from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

// this file handles creation of posts
export function Create() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };

    const divStyle={
        margin: "0 auto",
        padding: "20px",
        width: "40%",
        // height:"90%",
        borderRadius: "20px",
        boxShadow:"10px 10px 10px 10px rgba(1,1,1,0.5)",
        marginTop:"5%",
        textAlign:"center",
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

    return (
        <div style={divStyle}>
            <form>
                <div >
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes}/>
                </div>
                <textarea style={txtAreaStyle}>Enter Caption</textarea>
                <div>
                    <button style={buttonStyle}>Cancel</button>
                    <button style={buttonStyle}>Preview</button>
                    <button type="Create" style={buttonStyle}>Create</button>
                </div>
            </form>
        </div>
    );
  }
  