import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[{id:1,
        todo:"Todo Mssg",
        completed:false
    }],
    /* {id:1,
        todo:"Todo Mssg",
        completed:false
    } one todo object */
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})

export const TodoContextProvider=TodoContext.Provider;

export const  useTodo=()=>{
    return useContext(TodoContext); //inside useContext what context is created using useContext() that should be but inside brackets always 
}