Feature('validate search page');

const assert = require('assert');


Scenario('Valid label id search via auto-suggestion should return the right Label id and Shipping Tracking code @P0, @regression' ,  async ({ I }) => {
  I.amOnPage('/');
  I.fillField({ css: 'input[type=text]' }, '47-561-8310');
  I.pressKey('Enter');
  // test returns Label Id and Shipping Tracking code
  I.see('47-561-8310','//table/tbody/tr/td[1]');
  I.see('5796955810','//table/tbody/tr/td[2]');
  I.see('Test Kit Retrieved');
});

Scenario('Latest Search results should appear at the bottom of the Results container @P1, @regression',  async ({ I }) => {
  I.click({ css: 'svg[data-testid=CloseIcon]' });
  I.fillField({ css: 'input[type=text]' }, '63-921-1364');
  I.pressKey('Enter');
  // Latest search result always shows up at the bottom
  I.see('63-921-1364','//table/tbody/tr[2]/td[1]');
  I.see('6955996673','//table/tbody/tr[2]/td[2]');
});

Scenario('Invalid Label id should return appropriate toast message @P0, @regression',  async ({ I }) => {
  I.fillField({ css: 'input[type=text]' }, 'XY-561-8311');
  I.pressKey('Enter');
  I.see('No Test Kit Found.');
});

Scenario('Re-entering already searched label id should return appropriate toast message @P0, @regression',  async ({ I }) => {
  I.fillField({ css: 'input[type=text]' }, '47-561-8310');
  I.pressKey('Enter');
  I.see('Test Kit Already Retrieved');
});

Scenario('Clicking on search icon without entering a label id should retrun appropriate toast message @P2, @regression',  async ({ I }) => {
  I.click({css: 'button[class=search-box-submit-btn][title=search]'} );
  I.see('No Test Kit Found.');
});

Scenario('Clear x click removes the label id from search field @P2, @regression',  async ({ I }) => {
  I.click({ css: 'svg[data-testid=CloseIcon]' });
  I.pressKey('Enter');
  I.see('Test Kit Already Retrieved')
});

Scenario('Clear Results button should clear the results container @P0, @regression',  async ({ I }) => {
  I.click({xpath: '/html/body/div/div/div[2]/div[2]/div[2]/button'});
  I.dontSeeElement({class: 'results-container'} );
});

Scenario('Page refresh should cleat off the results container @P3, @regression',  async ({ I }) => {
  I.refreshPage();
  I.dontSeeElement({class: 'results-container'} );
});

Scenario('Page content above the search bar should always be present @P3, @regression',  async ({ I }) => {
  I.see('Welcome to the Biobot Test Kit Search App.')
});
