import { divide, sum } from "./math";


describe('Math ', () => {

    describe('divide()', () => {

        it('Should return result of first arg divided by the second arg', () => {
            const res = divide(10, 2);
            expect(res).toBe(5);
        })

        // Skipped Test
        it.skip('Skipped', () => {});

        // Only Test
        // it.only('Should return result of first arg divided by the second arg', () => {
        //     const res = divide(30, 10);
        //     expect(res).toBe(3);
        // })

        // Each 
        it.each([
            {inputA: 6,inputB: 3,expected: 2},
            {inputA: 15,inputB: 5,expected: 3},
            {inputA: 10,inputB: 0,expected: Infinity},      
        ])('should $inputA divided by $inputB equals $expected', ({inputA, inputB, expected}) => {
            const result = divide(inputA, inputB);

            expect(result).toBe(expected);
        });
        
        it('Should return Infinity', () => {
            const res = divide(10, 0);
            const expectedRes = Infinity;
            expect(res).toBe(expectedRes);
        })

    });

    describe('sum()', () => {

        it('Should return sum of two args', () => {
            const res = sum(10, 9);
            expect(res).toBe(19);
        })

    });

})