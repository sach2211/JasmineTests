describe('A few jasmine test - just to setup', function() {
    
    it('Expect tests to be working', function() {    
        expect(2).toBe(2);
    });

    it('Expect tests to be working', function() {
        expect(2).toBe(2);
    });
    it('Expect tests to be working', function() {
        expect(2).toBe(2);
    })
});


describe('Test slangy - ', function() {
    var slang = require('../src/index');
    var fullForm = slang.returnFullForm;

    it('Checks proper response for known slangs ', function() {
        let full = fullForm('LOL');
        expect(full).toEqual(jasmine.any(String));
        expect(full).toBe('Laugh Out Loud');
    });


    it('Checks proper response for unknown slangs ', function() {
        let full = fullForm('SomeRandomNewHippyWord');
        expect(full).toEqual(jasmine.any(String));
    });

    it('Checks proper response for no input ', function() {
        let full = fullForm('SomeRandomNewHippyWord');
        expect(full).toEqual(jasmine.any(String));
    });

})
