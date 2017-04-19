module.exports = function CountrySearchPage() {

  this.get = function() {
    return browser.get('http://10.2.51.48:8080/app/#!/country-search');
  };

  this.searchFor = function (value) {
      return element(by.model('model')).sendKeys('PO');
  }
};