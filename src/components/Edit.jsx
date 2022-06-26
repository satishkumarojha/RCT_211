import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodoFailure, updateTodoLoading, updateTodoSuccess } from '../redux/action';

export const Edit = () => {
    const{id} = useParams();
    const todos = useSelector((state)=>state.todo);
    const [change,setChange]= useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const[editTask,setEditTask] = useState({});
    // useEffect(()=>{
    //     let newtask = todos.find((ele)=>ele.id===Number(id));
    //     editTask && setEditTask(newtask);
    // },[todos,id]);
    const handleChange=(e)=>{
      setChange(e.target.value); 
    }
    const handleUpdate = (id)=>{
        dispatch(updateTodoLoading());
        axios.patch(`http://localhost:8080/todos/${id}`,{
            task:change
        })
        .then((r)=>{
            dispatch(updateTodoSuccess(r.data));
            // console.log(r.data);
            navigate("/");
        })
        .catch((e)=>dispatch(updateTodoFailure()));
    }
  return (
    <div>
        <input type="text" placeholder='edit here'  onChange={handleChange}/>
        <button onClick={()=>handleUpdate(id)}>Change</button>
        </div>
  )
}
