import axios from 'axios';
import { getTodos } from "./getTodos";

// Asiox get method spy
const axiosSpy = jest.spyOn(axios, 'get');

// console.error spy
const errorSpy = jest.spyOn(console, 'error');

describe('getTodos', () => {

    it('Should return an empty array in case of error and print error to console', async() => {

        const errMessage = 'Network Error';

        // Mock Error
        //axiosSpy.mockImplementationOnce(() => Promise.reject(errMessage));
        axiosSpy.mockRejectedValueOnce(errMessage);

        const result = await getTodos();

        // Console error have been called check
        expect(errorSpy).toHaveBeenCalledWith(errMessage);

        // If error we get empty array
        expect(result).toEqual([]);

    });

    it('Should return array of todos', async () => {
        const result = await getTodos();
        
        // Axios spy have been called
        expect(axiosSpy).toHaveBeenCalled();

        // Axios was called with certain argument
        expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos')
        
    });

});
