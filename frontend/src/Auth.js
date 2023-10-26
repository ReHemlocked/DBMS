import React from "react";
import { useState } from "react";
import axios, { Axios } from "axios";

const divStyle={
    margin: "0 auto",
    padding: "20px",
    width: "30%",
    height:"90%",
    borderRadius: "20px",
    boxShadow:"10px 10px 10px 10px rgba(1,1,1,0.5)",
    marginTop:"10%"
}

const inpStyle={
    width:"60%",
    height:"30px",
    borderRadius:"5px",
    marginBottom:"20px"
}

const buttonStyle={
    width:"30%",
    height:"30px",
    borderRadius:"5px",
}

function SignUp(){
    const [userInfo,setuserInfo]=useState({
        username:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setuserInfo({
            ...userInfo,[name]:value,
        },[])
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userInfo)
        axios.post("http://localhost:8000/Auths/SignUp",userInfo).then((res)=>{console.log(res)})
        // django endpoint that can receive post requests will be created at the url specified
    }

    return(
        <div>
            <div>
                <h1>Sign Up</h1>
                <form on onSubmit={handleSubmit}>
                    <input placeholder="User Name" name="username" onChange={handleChange} style={inpStyle}></input><br></br>
                    <input placeholder="E-mail" name="email" onChange={handleChange} style={inpStyle} type="email"></input><br></br>
                    <input placeholder="Password" name="password" onChange={handleChange} style={inpStyle} type="password"></input><br></br>
                    <button type="submit" style={{...buttonStyle}}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}


function Login(){
    const [userInfo,setuserInfo]=useState({
        email:"",
        password:""
    })
    const [isHovered, setIsHovered] = useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target
        setuserInfo({
            ...userInfo,[name]:value,
        },[])
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(userInfo)
        axios.post("http://localhost:8000/Auths/LogIn",userInfo).then((res)=>{console.log(res)})
    }

    const handleHover=()=>{
        setIsHovered(true)
    }

    return(
        <div>
            <h1>Log In</h1>
            <form on onSubmit={handleSubmit}>
                <input placeholder="E-mail" name="email" onChange={handleChange} style={inpStyle} type="email"></input><br></br>
                <input placeholder="Password" name="password" onChange={handleChange} style={inpStyle} type="password"></input><br></br>
                <button type="submit" style={{...buttonStyle}} onMouseOver={handleHover}>Log In</button>
                {/* add shade to button if user hovers over it */}
            </form>
        </div>
    )
}

// the main function that handles auths
export function Auth(){
    const [isSign,SetSign]=useState(true)
    // isSign state is set to true if user is registering else is set to false
    const spanStyle={
        display:"inline-block",
        width:"50%",
        height:"30px",
        cursor:"pointer",
        borderRadius:"5px"
    }

    return(
        <div style={divStyle}>
            <div>
                <div style={{...spanStyle,boxShadow:isSign?"1px 1px 1px 1px":""}} onClick={()=>{SetSign(true)}} >Sign Up</div>
                <div style={{...spanStyle,boxShadow:isSign?"":"1px 1px 1px 1px"}} onClick={()=>{SetSign(false)}}>Log In</div>
                {/* shadow is added based on whether user is registering or logging in */}
            </div>
            {isSign?<SignUp></SignUp>:<Login></Login>}
            {/* conditionally renders SignUp or LogIn function created above*/}
        </div>
    )
}