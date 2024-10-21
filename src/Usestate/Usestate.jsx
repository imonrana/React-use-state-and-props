import React from 'react'
import { useState } from 'react'


const Usestate = () => {
    // use state command
   const [count, setCount] = useState(0);
   const [disabled, setDisabled] = useState(true);

   const counter = (value)=>{

    const setCounter = count+value;
    setCount(setCounter);

    if (setCounter == 0) {
        setDisabled(true);
    }
    else{
        setDisabled(false)
    }
   }

   //    button disabled command
   function reset(){
    setCount(0);
    setDisabled(true);
   }




  return (
    <div id='use_state'>
        <h1 className='title'>React Counter (UseState Hooks Revision)</h1>
        <p className="count">You Clicked Button {count} Times</p>
        <div className="button_group">
        <button type='button' className="increment" onClick={()=>counter(1)} >+</button>
        <button type="button" className='decrement' disabled ={disabled} onClick={()=>counter(-1)} >-</button>
        <button type="button" className='reset' disabled = {disabled} onClick={reset}>Reset</button>    
        </div>   
    
    
    </div>
  )
}

export default Usestate