import { createToDo } from "./createToDo";

jest.mock('uuid', () => ({
    ...jest.requireActual('uuid'),
    v4: () => 'abcd'
}))

describe('createToDo', () => {

    it('Should return todo object with provided title, completed and id', () => {

        const title = 'Jest'
        const result = createToDo(title);
        const expectedResult = {
            title,
            completed: false,
            id: 'abcd'
        }

        expect(result).toEqual(expectedResult);
    }); 

});