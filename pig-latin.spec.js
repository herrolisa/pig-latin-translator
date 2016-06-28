var chai = require('chai');
var expect =  chai.expect;
var pigLatin = require('./pig-latin.js');

describe('Pig Latin Translator', function(){

  describe('Pig Latin to English Function', function () {
    it('should be a function', function () {
      expect(pigLatin.pigToEnglish).to.be.a('function');
    });
    it('should only accept a string as an argument', function () {
      expect(pigLatin.pigToEnglish.bind(null)).to.throw();
    });
    it('should append "ay" to the end of words that start with a vowel', function () {
      var eat = pigLatin.pigToEnglish('eat');
      expect(eat).to.equal('eatay');
      var omelet = pigLatin.pigToEnglish('omelet');
      expect(omelet).to.equal('omeletay');
      var are = pigLatin.pigToEnglish('are');
      expect(are).to.equal('areay');
    });
    it('should move consonant letters up to the first vowel to the end of the word and append "ay" to words that start with a consonant', function () {
      var pig = pigLatin.pigToEnglish('pig');
      expect(pig).to.equal('ig-pay');
      var banana = pigLatin.pigToEnglish('banana');
      expect(banana).to.equal('anana-bay');
      var trash = pigLatin.pigToEnglish('trash');
      expect(trash).to.equal('ash-tray');
    });
  });
});