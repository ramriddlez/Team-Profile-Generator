const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getRole', () => {
        it('should provide the Intern value', () => {
            // const testValue = "Intern";
            // const i = new Intern();

            // const mock = jest.spyOn(console, "log");

            // mock.mockImplementation(() => { });

            // Intern.getRole();

            // expect(i.getRole()).toBe(testValue);

            // mock.mockRestore();
            const i = new Intern("SIMRAN", 5 , "ok@outlook.com", "UofT");
            expect(i.getRole()).toBe("Intern")
        })
    })

    describe('getSchool', () => {
        it('should get a school value that the user inputs', () => {
            // const testValue = "UofT";
            // const i = new Intern ();

            // const mock = jest.spyOn(console, 'log');
            // mock.mockImplementation(() => { });

            // Intern.getSchool();

            // expect(i.getSchool()).toBe(testValue);
            // mock.mockRestore();

            const i = new Intern("SIMRAN", 5 , "ok@outlook.com", "UofT");
            expect(i.getSchool()).toBe("UofT")
            
        })
    })
})