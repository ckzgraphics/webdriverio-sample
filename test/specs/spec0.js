const assert = require('assert');

describe('webdriver_io_page', () => {
    
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
    
    it('Open Google URL', () => {
        browser.url('https://www.google.com');
        assert.equal('Hello', 'Hello');
    });
    
});


describe('New_Facebook_Test', () => {
    
    it('Open Facebook', () => {
        browser.url('https://www.facebook.com');
        assert.equal('Hello', 'Hello');
    });
    
});
