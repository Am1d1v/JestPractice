import { getLength } from "../getLength";

describe('Get Length of the provided array', () => {

    // Multiple Only Tests
    it.only('Should return 0 for an empty array', () => {
        const res = getLength([]);
        expect(res).toBe(0);
    });

    it.only('Should return 1 for an empty array', () => {
        const res = getLength([1]);
        expect(res).toBe(1);
    });

    it('Should return 2 for an empty array', () => {
        const res = getLength([1, 2]);
        expect(res).toBe(2);
    });

    it('Should return 0 for an empty array', () => {
        const res = getLength([1, 2, 3]);
        expect(res).toBe(3);
    });

    // todo
    it.todo('Should return 0 for an empty array');


});