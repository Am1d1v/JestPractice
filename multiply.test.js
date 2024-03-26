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

// Arrays Comoarison
it('Should compare length of array', () => {

    expect([1, 2, 3]).toHaveLength(3);

}) 
