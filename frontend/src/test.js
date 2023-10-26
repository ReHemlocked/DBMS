import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

export function Test(){
    const [arr,setArr]=useState(["Hello World","afdasfa"]);


    return(
        <div>
            {
                arr.map((i,index)=>{
                    <p key={index}>{i}</p>
                })
            }
        </div>
    )
}