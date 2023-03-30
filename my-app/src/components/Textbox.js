import React, { useState } from 'react'

export default function Textbox(props) {

    const [InputVal,NewChangeVal] =  useState("Enter The Value");
 
    console.log(InputVal);

    const onChange=(event)=>{
        // const Newval = event.target.value;

        // NewChangeVal(Newval);

        NewChangeVal(event.target.value)
    }

    const myfunc1 = () =>{
        // alert("hii Data Saved")
        let newText = InputVal.toLocaleUpperCase();
        NewChangeVal (newText);
    }
    const myfunc2 = () =>{
        // alert("hii Data Saved")
        let newText = InputVal.toLocaleLowerCase();
        NewChangeVal (newText);
    }
    const myfunc3 = () =>{
        // alert("hii Data Saved")
        let newText = InputVal.toLocaleLowerCase();
        NewChangeVal (newText);
    }

    return (
        <>
            <div className="mb-3 mt-5">
        {/* <h1>{InputVal}</h1> */}
            
            <textarea className="form-control" value={InputVal} id="one" rows="13" onChange={onChange}></textarea>
            <button className='btn btn-primary mt-4' id='one' onClick={myfunc1}>ToUpper Case</button>
            <button className='btn btn-primary mx-4 mt-4'  id='one' onClick={myfunc2}>ToLower Case</button>
            <button className='btn btn-primary mx-4 mt-4'  id='one' onClick={myfunc3}>ToLower Case</button>
        </div>

        <div className="container2 my-4">
            <h1>Your Text Summary</h1>
            <p>{InputVal.split(" ").length} word and Characters is {InputVal.length} </p>
            <p>{0.008*InputVal.split(" ").length}Minutes to read</p>
            <h2>Preview</h2>
            <p>{InputVal}</p>
        </div>
        </>
    )
}
