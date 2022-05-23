import React from "react";
import styles from "./addTask.module.css";
// import React, { useState } from 'react';

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

    // const [task,setTask] = useState("")
    // const [todo,setTask1] = useState([])




    // const handle =(e)=>{
    //     setTask(e.target.value)
    //     console.log(e.target.value)
    // }
    // const handclick =()=>{
    //     setTask1([...todo,task])
    //     setTask("")
    // }



  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" placeholder="Add task..." type="text" />
      <button  data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
