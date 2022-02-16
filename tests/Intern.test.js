const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getRole', () => {
        it('should provide the Intern value', () => {
            const testValue = "Intern";
            const i = new Intern();

            const mock = jest.spyOn(console, "log");

            mock.mockImplementation(() => { });

            Intern.getRole();

            expect(i.getRole()).toBe(testValue);

            mock.mockRestore();
        })
    })

    describe('getSchool', () => {
        it('should get a school value that the user inputs', () => {
            const testValue = "UofT";
            const i = new Intern ();

            const mock = jest.spyOn(console, 'log');
            mock.mockImplementation(() => { });

            Intern.getSchool();

            expect(i.getSchool()).toBe(testValue);
            mock.mockRestore();
            
        })
    })
})