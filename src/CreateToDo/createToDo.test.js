import { createToDo, createToDoOnServer } from "./createToDo";
import {mockToDO} from '../Mocks/toDo.mock'


const mockedV4 = jest.fn(() => 'abcd');

// Mock uuid
jest.mock('uuid', () => ({
    ...jest.requireActual('uuid'),
    v4: () => mockedV4()
}))

global.fetch = jest.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockToDO)
}));

describe('createToDo', () => {

    // Clear all mockes
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should return todo object with provided title, completed and id', () => {

        const title = 'Jest'
        const result = createToDo(title);
        const expectedResult = {
            title,
            completed: false,
            id: 'abcd'
        }

        expect(result).toEqual(expectedResult);
        expect(mockedV4).toHaveBeenCalledTimes(1);
    }); 


    it('Should create todo on server', async () => {

        const result = await createToDoOnServer('my todo title')

        expect(result).toEqual(mockToDO);
        expect(fetch).toHaveBeenCalledTimes(1);

    })

});