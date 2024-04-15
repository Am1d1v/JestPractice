import toSnakeCase from "./transform";

describe('toSnakeCase fn', () => {

    it('Should return a word separated with -', () => {

        const res = 'h-e-l-l-o';

        expect(toSnakeCase('Hello')).toBe(res);

    })

});