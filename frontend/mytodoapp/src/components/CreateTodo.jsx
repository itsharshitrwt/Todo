import React from 'react'
export function CreateTodo() {
    return <div>
        <input type='text' placeholder='title' style={{padding: '5px', margin:"10px"}}/><br></br><br></br>
        <input type='text' placeholder='description'style={{padding: '5px', margin:"10px"}}/>
         <br></br>
         <br></br>
        
        <button style={{padding: '5px', margin:"10px"}}> Add Todo</button>
    </div>
}