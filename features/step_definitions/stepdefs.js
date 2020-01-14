const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
    if (today === "Friday") {
      return "TGIF"; 
    } else {
      return "Nope";
    }
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
    // return 'pending';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
    // return 'pending';
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
    // return 'pending';
});

Given('today is Friday', function () {
    this.today = 'Friday';
});