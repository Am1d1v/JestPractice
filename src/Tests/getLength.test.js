import { getLength } from "../getLength";

describe('Get Length of the provided array', () => {

    it('Should return 0 for an empty array', () => {
        const res = getLength([]);
        expect(res).toBe(0);
    });

});