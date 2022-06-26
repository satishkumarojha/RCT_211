import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import { removeTodoFailure, removeTodoLoading, removeTodoSuccess, toggleTodoFailure, toggleTodoLoading, toggleTodoSuccess } from '../redux/action';
export const SingleItem = () => {
    const todos = useSelector((state)=>state.todo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const [singleTodo,setTodo] = useState({
       
    });
    const handleToggle = (id,newstatus)=>{
        dispatch(toggleTodoLoading());
        axios.patch(`http://localhost:8080/todos/${id}`,{
            taskStatus:newstatus
        }).then((r)=>dispatch(toggleTodoSuccess(r.data)))
        .catch((e)=>dispatch(toggleTodoFailure(e)));
    }
    const handleRemove = (id)=>{
        dispatch(removeTodoLoading());
        axios.delete(`http://localhost:8080/todos/${id}`)
        .then((r)=>{
            dispatch(removeTodoSuccess(id));
            navigate("/")
        })
        .catch((e)=>dispatch(removeTodoFailure()));
    }
    useEffect(()=>{
       let newtodo= todos.find((item)=>item.id===Number(id));
       setTodo(newtodo);

    },[todos,id])
  return (
    <div>
        <h1>{singleTodo?.task} - {singleTodo?.taskStatus?"Done":"Not done"}</h1>
        <button onClick={()=>handleToggle(singleTodo.id,!singleTodo.taskStatus)}>Toggle</button>
        <button onClick={()=>handleRemove(singleTodo.id)}>Remove</button>
        <Link to={`/todos/${singleTodo.id}/edit`}><button>Edit</button></Link>
        

    </div>
  )
}
