import React from "react";
import { useState } from "react";

// this file handles creation of posts
export function Create(){
    return(
        <div>
            <form>
                <textarea rows={5} cols={5}></textarea>
            </form>
        </div>
    )
}