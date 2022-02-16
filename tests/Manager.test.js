const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getRole', () => {
        it('should provide the Manager value', () => {
            // const testValue = "Manager";
            // const i = new Manager();

            // const mock = jest.spyOn(console, "log");

            // mock.mockImplementation(() => { });

            // Manager.getRole();

            // expect(i.getRole()).toBe(testValue);

            // mock.mockRestore();
            const i = new Manager("SIMRAN", 5 , "ok@outlook.com");
            expect(i.getRole()).toBe("Manager")
        })
    })

    describe('getOfficeNumber', () => {
        it('should get a numerical value that the user inputs', () => {
            // const testValue = "416-416-4166";
            // const i = new Manager ();

            // const mock = jest.spyOn(console, 'log');
            // mock.mockImplementation(() => { });

            // Manager.getOfficeNumber();

            // expect(i.getOfficeNumber()).toBe(testValue);
            // mock.mockRestore();
            
            const i = new Manager("SIMRAN", 5 , "ok@outlook.com", "416-416-4166");
            expect(i.getOfficeNumber()).toBe("416-416-4166")
        })
    })
})