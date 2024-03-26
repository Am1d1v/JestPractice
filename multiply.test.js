import { multiply } from "./multiply";


describe('Multiply numbers', () => { 

    it('should multiply positive numbers', () => {

        const res = multiply(2, 3);
        
        expect(res).toBe(6);

    });

    it('should multiply negative numbers', () => {

        const res = multiply(-3, -3);

        expect(res).toBe(9);

    });

 })
