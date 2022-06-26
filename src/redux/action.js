import { GET_TODO_FAILURE, GET_TODO_LOADING, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_LOADING, POST_TODO_SUCCESS, REMOVE_TODO_FAILURE, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS, TOGGLE_TODO_FAILURE, TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS, UPDATE_TODO_FAILURE, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./actionTypes";

export const getTodoLoading = ()=>{
    return {type:GET_TODO_LOADING}
};
export const getTodoSuccess = (payload)=>({type:GET_TODO_SUCCESS,payload:payload});
export const getTodoFailure = (payload)=>({type:GET_TODO_FAILURE,payload:payload});

export const postTodoLoading = ()=>{
    return {type:POST_TODO_LOADING}
};
export const postTodoSuccess = (payload)=>({type:POST_TODO_SUCCESS,payload:payload});
export const postTodoFailure = (payload)=>({type:POST_TODO_FAILURE,payload:payload});

export const toggleTodoLoading = ()=>{
    return {type:TOGGLE_TODO_LOADING}
};
export const toggleTodoSuccess = (payload)=>({type:TOGGLE_TODO_SUCCESS,payload:payload});
export const toggleTodoFailure = (payload)=>({type:TOGGLE_TODO_FAILURE,payload:payload});

export const removeTodoLoading = ()=>{
    return {type:REMOVE_TODO_LOADING}
};
export const removeTodoSuccess = (payload)=>({type:REMOVE_TODO_SUCCESS,payload:payload});
export const removeTodoFailure = (payload)=>({type:REMOVE_TODO_FAILURE,payload:payload});

export const updateTodoLoading = ()=>{
    return {type:UPDATE_TODO_LOADING}
};
export const updateTodoSuccess = (payload)=>({type:UPDATE_TODO_SUCCESS,payload:payload});
export const updateTodoFailure = (payload)=>({type:UPDATE_TODO_FAILURE,payload:payload});