var chai = require('chai');
var expect =  chai.expect;
var pigLatin = require('./pig-latin.js');

describe('Pig Latin Translator', function(){
  describe('English to Pig Latin Function', function () {
    it('should be a function', function () {
      expect(pigLatin.englishToPig).to.be.a('function');
    });
    it('should only accept a string as an argument', function () {
      expect(pigLatin.englishToPig.bind(null)).to.throw();
    });
    it('should append "ay" to the end of words that start with a vowel', function () {
      var eat = pigLatin.englishToPig('eat');
      expect(eat).to.equal('eatay');
      var omelet = pigLatin.englishToPig('omelet');
      expect(omelet).to.equal('omeletay');
      var are = pigLatin.englishToPig('are');
      expect(are).to.equal('areay');
    });
    it('should move consonant letters up to the first vowel to the end of the word and append "ay" to words that start with a consonant', function () {
      var pig = pigLatin.englishToPig('pig');
      expect(pig).to.equal('ig-pay');
      var banana = pigLatin.englishToPig('banana');
      expect(banana).to.equal('anana-bay');
      var trash = pigLatin.englishToPig('trash');
      expect(trash).to.equal('ash-tray');
    });
    it('should convert all words in a sentence to Pig Latin following the rules of whether they start with a vowel or consonant', function () {
      var sentence = pigLatin.englishToPig('I am here');
      expect(sentence).to.equal('Iay amay ere-hay');
      var question = pigLatin.englishToPig('Are we there yet');
      expect(question).to.equal('Areay e-way ere-thay et-yay');
    });
  });
});

describe('English Translator', function(){
  describe('Pig Latin to English Function', function () {
    it('should be a function', function () {
      expect(pigLatin.pigToEnglish).to.be.a('function');
    });
    it('should only accept a string as an argument', function () {
      expect(pigLatin.pigToEnglish.bind(null)).to.throw();
    });
    it('should remove "ay" to the end of words that have "ay" appended', function () {
      var eatPTE = pigLatin.pigToEnglish('eatay');
      expect(eatPTE).to.equal('eat');
      var omeletPTE = pigLatin.pigToEnglish('omeletay');
      expect(omeletPTE).to.equal('omelet');
      var arePTE = pigLatin.pigToEnglish('areay');
      expect(arePTE).to.equal('are');
    });
    it('should move consonant(s) to the from of the word after "-" as well as remove the "-"', function () {
      var pigPTE = pigLatin.pigToEnglish('ig-pay');
      expect(pigPTE).to.equal('pig');
      var bananaPTE = pigLatin.pigToEnglish('anana-bay');
      expect(bananaPTE).to.equal('banana');
      var trashPTE = pigLatin.pigToEnglish('ash-tray');
      expect(trashPTE).to.equal('trash');
    });
    it('should convert all words in a sentence to Pig Latin following the rules of whether they start with a vowel or consonant', function () {
      var sentencePTE = pigLatin.pigToEnglish('Iay amay ere-hay');
      expect(sentencePTE).to.equal('I am here');
      var questionPTE = pigLatin.pigToEnglish('Areay e-way ere-thay et-yay');
      expect(questionPTE).to.equal('Are we there yet');
    });
  });
});