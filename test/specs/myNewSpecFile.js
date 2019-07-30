const assert = require("assert");

describe("DESC My New Spec", function() {
  it("Open Google", function() {
    browser.url("https://www.google.com");
  });

  it("Open Yahoo", function() {
    browser.url("https://www.yahoo.com");
  });
});

describe("DESC Facebook", function() {
  it("Open Google", function() {
    browser.url("https://www.facebook.com");
  });
});
