import { createUser } from "./createUser"


describe('createUser', () => {

    it('Should create a user with firstname and lastname only', () => {

        const user = createUser({firstName: "D", lastName: 'Surname'});

        expect(user).toMatchSnapshot();

    })

    it('Should create a user with firstname, lastname and phone', () => {

        const user = createUser({firstName: "D", lastName: 'Surname', phone: '123-123-123'});

        expect(user).toMatchSnapshot();

    })

    it('Should create a user with firstname,lastname, phone and email', () => {

        const user = createUser({firstName: "D", lastName: 'Surname', phone: '123-123-123', email: 'mail@mail.com'});

        expect(user).toMatchSnapshot();

    })

})