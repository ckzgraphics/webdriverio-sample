const assert = require('assert');

describe('WebDriverIO.Sepcs New', () => {
    
    it('Open Twitter', () => {
        browser.url('https://www.twitter.com');
        assert.equal('Hello', 'Hello');
    });
    
   it('Open Facebook', () => {
        browser.url('https://www.facebook.com');
        assert.equal('Hello', 'Hello');
    });
    
});
