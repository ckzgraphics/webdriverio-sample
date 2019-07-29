const assert = require('assert');

describe('New.Facebook Test', () => {
    
    it('Open Facebook', () => {
        browser.url('https://www.facebook.com');
        assert.equal('Hello', 'Hello');
    });
    
});
