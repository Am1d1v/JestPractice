import { multiply } from "./multiply";


describe('Multiply numbers', () => { 

    it('should multiply positive numbers', () => {

        const res = multiply(2, 3);
        
        expect(res).toBe(6); // ===

    });


    it('should multiply negative numbers', () => {

        const res = multiply(-3, -3);

        expect(res).toBe(9);

    });

 })


// Objects Comparison
it('Should compare 2 objects', () => {

    expect({a: 1}).toEqual({a: 1})

}) 

// Arrays Length Comparison
it('Should compare length of array', () => {

    expect([1, 2, 3]).toHaveLength(3);

}) 

it('Should contains the certain value', () => {

    expect([1, 2, 3]).toContain(3);

}) 

it('Should not contains the certain value', () => {

    expect([1, 2, 3]).not.toContain(10);

}) 

it('Should check that array is not undefined', () => {

    const res = [1, 2, 3];

    // Array is not undefind
    expect(res).not.toBeUndefined();

    // Array is defined
    expect(res).toBeDefined();

    // Array is not empty
    expect(res).toBeTruthy();

}) 
