import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { AddTodo } from '../components/AddTodo'
import { getTodoFailure, getTodoLoading, getTodoSuccess } from '../redux/action'
import { TodoItem } from '../components/TodoItem'
export const Home = () => {
    const dispatch = useDispatch();
    let todos = useSelector((state)=>state.todo);
    const getTodos = async ()=>{
        dispatch(getTodoLoading());
        try{
            let res=await axios.get("http://localhost:8080/todos");
            dispatch(getTodoSuccess(res.data));
        }
        catch(err){
            dispatch(getTodoFailure(err));
        }
        
    }
    useEffect(()=>{
        getTodos();
       
    },[]);
    // console.log(todos); 
  return (
    <div>Home
        <h1>Add todo</h1>
        <AddTodo/>
        <TodoItem todoitems={todos}/>
    </div>
  )
}
