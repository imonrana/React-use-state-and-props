import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Toogle = () => {
    const [mode, setMood] = useState(true);
    const handelClick = () =>{
        setMood((prevState)=> !prevState);

    }
    const toogleBtn = mode ? "light" : "dark";
    
    useEffect(()=>{
        document.body.className = toogleBtn;
    }, [toogleBtn]);

  return (
    <div>
        <div className="toogle_container">
            <button type="button" onClick={handelClick}>Change Theme</button>
        </div>
    </div>
  )
}

export default Toogle