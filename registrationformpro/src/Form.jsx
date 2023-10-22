import React, { useEffect, useState } from "react";

function Form(){
const data={ name:"", password:"" ,  email:""};
const[inputData , setInputData]=useState(data)
const[ flag ,setFlag]=useState(false)
useEffect ( ()=>{
 console.log("registratd")
},[flag])
function handleData(e){
    setInputData({... inputData,[e.target.name]:e.target.value})
 console.log(inputData)
}

function handlesubmit(e){  
e.preventDefault();
if (!inputData.name || !inputData.password || !inputData.email){
    alert("all data mandoatory")
}
else{
    setFlag(true)

}

}




    return(
        <>


        <pre> {(flag)? <h2 className="ui-define">hellow {inputData.name},you have REgistrated successfyll
        </h2>:""
     }</pre>
      <form className="container" onSubmit={handlesubmit}>
      <div className="header">
      <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text"
        placeholder="enter ur name"
        name="name"
        value={inputData.name}
        onChange={handleData}
        ></input>
        
    </div>
    <div>
        <input type="text"
        placeholder="enter ur emAil"
        name="email"
        value={inputData.email}
        onChange={handleData}
        ></input>
        
    </div>
    <div>
        <input type="text"
        placeholder="enter ur password"
        name="password"
        value={inputData.password}
        onChange={handleData}

        ></input>
        
    </div>

    <button type="submit">submit</button>





</form>
 </>
    )
}

export default Form
