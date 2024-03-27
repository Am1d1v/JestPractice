

export function filterArray(array, callback){
    const newArray = [];

    for(let i = 0; i < array.length; i++){
        if(callback(array)){
            newArray.push(array[i]);
        }
    }
}