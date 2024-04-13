import { v4 } from "uuid";

export function createToDo(title){
    
    return{
        title,
        completed: false,
        id: v4()
    }
}

export async function createToDoOnServer(title){
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(createToDo(title))
    });

    if(!response.ok) throw Error('Cannot create ToDo');

    return response.json();
}