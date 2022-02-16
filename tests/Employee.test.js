const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("getName", () => {
        it('should get name when user inputs name', () => {
            const name = "SIMRAN";
            const e = new Employee();
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
    
            expect(e.name).toBe(name);
            mock.mockRestore();
        });
    });    
    
    describe('getId', () => {
        it('should get id when user inputs id value', () => {
            const idvalue = "12";
            const e = new Employee();
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });
            
            expect(e.id).toBe(idvalue);
            mock.mockRestore();
        });
    })
    
    describe("getEmail", () =>{
        it('should get email when user inputs email', () => {
            const mail = "genius@genius.com"
            const e = new Employee();
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => { });

            expect (e.email).toBe(mail);
            mock.mockRestore();
        })
    })
    describe('getRole', () => {
        it('should return the value of Employee', () => {
            const testValue = "Employee";
            const e = new Engineer;
            const mock = jest.spyOn(console, "log");

            mock.mockImplementation(() => { });

            Engineer.getRole();

            expect(e.getRole()).toBe(testValue);

            mock.mockRestore();
        });
    });    
});