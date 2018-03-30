/**
 * 
 * 
 * A sample CLI program to learn testing with jasmine.
 * 
 * It takes in a series of modern slang acronyms and returns the full form.
 * 
 * eg. - 
 *  input => LOL
 *  output => Laught out Loud
 * 
 * 
 */

var slangs = require('./slangList.json');

function returnFullForm(query) {
  var matchedSlang = slangs.filter( (slang) => {
    return query === slang.short;
  });

  var fullForm = matchedSlang && matchedSlang[0] && matchedSlang[0].long || "We're not aware of this one right now !";

  return fullForm;
};


module.exports = { 
  returnFullForm
};