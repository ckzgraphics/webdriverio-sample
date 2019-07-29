const assert = require('assert');

describe('WebDriverIO.Sepcs New', () => {
    
    it('Open Twitter', () => {
        browser.url('https://www.twitter.com');
        assert.equal('Hello', 'Hello');
    });
    
});
