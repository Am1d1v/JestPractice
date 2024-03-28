import axios from 'axios';
import { getTodos } from "./getTodos";

// Asiox get method spy
const axiosSpy = jest.spyOn(axios, 'get');

// console.error spy
const errorSpy = jest.spyOn(console, 'error');

describe('getTodos', () => {

    it('Should return an empty array in case of error and print error to console', );

    it('Should return array of todos', );

});
