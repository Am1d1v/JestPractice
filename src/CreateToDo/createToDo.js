import { v4 } from "uuid";

export function createToDo(title){
    
    if(!title){
        throw new Error ('No title provided');
    }

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

    if(!response.ok) throw new Error('Cannot create ToDo');

    return response.json();
}