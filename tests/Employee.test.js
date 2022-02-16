const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("getName", () => {
        it('should get name when user inputs name', () => {
            // const name = "SIMRAN";
            // const e = new Employee();
            // const mock = jest.spyOn(console, "log");
            // mock.mockImplementation(() => { });
    
            // expect(e.name).toBe(name);
            // mock.mockRestore();

            const e = new Employee("SIMRAN", 5 , "ok@outlook.com");
            expect(e.getName()).toBe("SIMRAN")

        });
    });    
    
    describe('getId', () => {
        it('should get id when user inputs id value', () => {
            // const idvalue = "12";
            // const e = new Employee();
            // const mock = jest.spyOn(console, "log");
            // mock.mockImplementation(() => { });
            
            // expect(e.id).toBe(idvalue);
            // mock.mockRestore();
            const e = new Employee("SIMRAN", 5 , "ok@outlook.com");
            expect(e.getId()).toBe(5)

        });
    })
    
    describe("getEmail", () =>{
        it('should get email when user inputs email', () => {
            // const mail = "genius@genius.com"
            // const e = new Employee();
            // const mock = jest.spyOn(console, "log");
            // mock.mockImplementation(() => { });

            // expect (e.email).toBe(mail);
            // mock.mockRestore();
            const e = new Employee("SIMRAN", 5 , "ok@outlook.com");
            expect(e.getEmail()).toBe("ok@outlook.com")
        })
    })
    describe('getRole', () => {
        it('should return the value of Employee', () => {
            // const testValue = "Employee";
            // const e = new Engineer;
            // const mock = jest.spyOn(console, "log");

            // mock.mockImplementation(() => { });

            // Engineer.getRole();

            // expect(e.getRole()).toBe(testValue);

            // mock.mockRestore();
            const e = new Employee("SIMRAN", 5 , "ok@outlook.com");
            expect(e.getRole()).toBe("Employee")
            
        });
    });    
});