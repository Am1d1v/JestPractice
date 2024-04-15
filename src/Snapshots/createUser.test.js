import { createUser } from "./createUser"


describe('createUser', () => {

    it('Should create a user with firstname and lastname only', () => {

        const user = createUser({firstName: "D", lastName: 'Surname'});

        expect(user).toMatchSnapshot();

    })

})