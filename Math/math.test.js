import { divide, sum } from "./math";


describe('Math ', () => {

    describe('divide()', () => {

        it('Should return result of first arg divided by the second arg', () => {
            const res = divide(10, 2);
            expect(res).toBe(5);
        })
        
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