const assert = require('assert');

describe('New_Facebook_Test', () => {
    
    it('Open Twitter', () => {
        browser.url('https://www.twitter.com');
        assert.equal('Hello', 'Hello');
    });
    
});
