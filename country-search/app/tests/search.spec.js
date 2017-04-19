var CountrySearchPage = require('./page.js')

describe('country search main page', function() {

  it('should display matching countries', function() {
        var page = new CountrySearchPage();
        page.get();
        page.searchFor("PO");

        expect(element(by.css('a[title=Poland]')).isPresent()).toBeTruthy();
        expect(element(by.css('a[title=Portugal]')).isPresent()).toBeTruthy();
  });

it('should add country to matching countries list', function() {
        var page = new CountrySearchPage();
        page.get();
        page.searchFor("PO");

        element(by.css('a[title=Portugal]')).click();

        expect(element(by.css('.country-item')).isPresent()).toBeTruthy();
  });

it('should delete country from the list when icon is clicked', function() {
        var page = new CountrySearchPage();
        page.get();
        page.searchFor("PO");

        element(by.css('a[title=Portugal]')).click();
        element(by.css('.glyphicon-remove')).click();

        expect(element(by.css('.country-item')).isPresent()).toBeFalsy();
  });  

});