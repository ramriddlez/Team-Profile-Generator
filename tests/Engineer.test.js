const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{
    describe('getGithub', () => {
        it('should return the gethub based on user input', () => {
            const testValue = "ramriddlez";
            const e = new Engineer();
            const mock = jest.spyOn(console, "log");
            
            mock.mockImplementation(() => { });

            Engineer.getGithub();

            expect(e.getGithub()).toBe(testValue);

            mock.mockRestore();
        });
    });

    describe('getRole', () => {
        it('should return the value of Engineer', () => {
            const testValue = "Engineer";
            const e = new Engineer;
            const mock = jest.spyOn(console, "log");

            mock.mockImplementation(() => { });

            Engineer.getRole();

            expect(e.getRole()).toBe(testValue);

            mock.mockRestore();
        });
    });









})