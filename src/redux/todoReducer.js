import * as types from './actionTypes';

const init = {
    todo:[],
    isLoading:false,
    isError:false
}
export const todoReducer = (state=init,{type,payload})=>{
    switch (type) {
        case types.GET_TODO_LOADING :{
    
        return {
            ...state,
            isLoading:true,
            isError:false
        }
        }
        case types.GET_TODO_SUCCESS :{
            
            return {
                ...state,
                todo:payload,
                isLoading:false,
                isError:false
            }
        }
        case types.GET_TODO_FAILURE :{

            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case types.POST_TODO_LOADING :{
         
        return {
            ...state,
            isLoading:true,
            isError:false
        }
        }
        case types.POST_TODO_SUCCESS :{
          
            let newarr = [...state.todo,payload]
            return {
                ...state,
                todo:newarr,
                isLoading:false,
                isError:false
            }
        }
        case types.POST_TODO_FAILURE :{
        

            return {
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case types.TOGGLE_TODO_LOADING :{

            return {
                ...state,
                isLoading:true,
                isError:false
            }
            }
            case types.TOGGLE_TODO_SUCCESS :{
    
                let newarr = state.todo.map((ele)=>ele.id==payload.id?{...ele,taskStatus:payload.taskStatus}:ele);

                return {
                    ...state,
                    todo:newarr,
                    isLoading:false,
                    isError:false
                }
            }
            case types.TOGGLE_TODO_FAILURE :{
            
    
                return {
                    ...state,
                    isLoading:false,
                    isError:true
                }
            }
            case types.REMOVE_TODO_LOADING :{

                return {
                    ...state,
                    isLoading:true,
                    isError:false
                }
                }
                case types.REMOVE_TODO_SUCCESS :{
        
                    let newarr = state.todo.filter((ele)=>ele.id!==payload);
    
                    return {
                        ...state,
                        todo:newarr,
                        isLoading:false,
                        isError:false
                    }
                }
                case types.REMOVE_TODO_FAILURE :{
                
        
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                }
                case types.UPDATE_TODO_LOADING :{
         
                    return {
                        ...state,
                        isLoading:true,
                        isError:false
                    }
                    }
                    case types.UPDATE_TODO_SUCCESS :{
                      
                        let newarr = [...state.todo,payload]
                        return {
                            ...state,
                            todo:newarr,
                            isLoading:false,
                            isError:false
                        }
                    }
                    case types.UPDATE_TODO_FAILURE :{
                    
            
                        return {
                            ...state,
                            isLoading:false,
                            isError:true
                        }
                    }
        default :{
            console.log("default post");
            return state;
        }
    }
}