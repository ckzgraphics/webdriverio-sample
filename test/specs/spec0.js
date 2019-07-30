const assert = require('assert');

describe('New.Facebook Test', () => {
    
    it('Open Facebook', () => {
        browser.url('https://www.facebook.com');
        assert.equal('Hello', 'Hello');
    });
    
});

describe('New.BrowserStack Test', () => {
    
    it('Open BrowserStack', () => {
        browser.url('https://www.browserstack.com');
        assert.equal('Hello', 'Hello');
    });
    
});
