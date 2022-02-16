const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('should get name when user inputs name', () => {
        const name = "SIMRAN";
        const e = new Employee();

        expect(e.name).toBe(name);
    });

    it('should get ID when user inputs ID', () => {
        const idvalue = "12";
        const e = new Employee();

        expect(e.id).toBe(idvalue);
    });

    it('should get email when user inputs email', () => {
        const mail = "genius@genius.com"
        const e = new Employee ();

        expect(e.email).toBe(mail);
    });

    
});