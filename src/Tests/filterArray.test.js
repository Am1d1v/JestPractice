import { filterArray } from "../filterArray";
import { basketWithNoQuantity, filteredBasketWithQuantityOnly } from "../Mocks/basket.mock";

// Spies
const logSpy = jest.spyOn(console, 'log');

describe('filtereArray()', () => {

    // Clear All Mocks
    afterEach(() => {
        jest.clearAllMocks();
    })

    it('Should not invoke callback if an array is empty', () => {
        const cb = jest.fn();

        filterArray([], cb);

        expect(cb).toHaveBeenCalledTimes(0);

        // Console.log haven't been called
        expect(logSpy).not.toHaveBeenCalled();
    });

    it('Should invoke provided function as many times as the length of an array', () => {
        const cb = jest.fn();

        const arr = [1, 2, 3];

        filterArray(arr, cb);

        expect(cb).toHaveBeenCalledTimes(arr.length);
    });

    it('Should filter an array using provided predicate', () => {
        const hasQuantity = (order) => order.quantity > 0;

        const result = filterArray(basketWithNoQuantity, hasQuantity);

        expect(result).toEqual(filteredBasketWithQuantityOnly);

        // Console.log have been called as many times as filtered array length
        expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length)
    });

});