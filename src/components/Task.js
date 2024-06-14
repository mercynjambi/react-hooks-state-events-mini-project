import React from "react";

function Task({text, category, deleteTask}) {
  
    return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick ={()=>deleteTask(text)}>X</button>
    </div>
  )};
  

export default Task;