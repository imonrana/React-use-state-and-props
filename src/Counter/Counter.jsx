import React, { useState } from 'react'


              
const Counter = () => {
    // use state hooks practies
const [count, setCount] = useState(0);
const [disabled, setDisabled] = useState(true)

function clickHandler(value){
    const counter = count+value;
    
    setCount(counter);
    if(counter == 0){
        setDisabled(true);
    }
    else{
        setDisabled(false);
    }

}

const resetHandlar = ()=>{
    setCount(0);
    setDisabled(true);
}
  return (
    <div className="main">
        <div className='content'>
        <h1> React Counter</h1>
        <h2>Count: {count}</h2>
        <div className="btn-group">
            <button type='button' onClick={()=> clickHandler(1)}>Increment</button>
            <button type="button" disabled = {disabled} onClick={()=> clickHandler(-1)}>Decrement</button>
            <button type="button" disabled = {disabled} onClick={resetHandlar}>Reset</button>
        </div>
    </div>
    </div>
  )
}

export default Counter