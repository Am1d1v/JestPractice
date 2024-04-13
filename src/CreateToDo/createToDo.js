import { v4 } from "uuid";

export function createToDo(title){
    
    return{
        title,
        completed: false,
        id: v4()
    }
}