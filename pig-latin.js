function pigToEnglish(engString){
  if (typeof engString !== 'string'){
    throw new Error();
  }

  //splits string into an array
  var splitUp = engString.split(/([aeiou].*)/);

  //this string starts with a vowel
  if (splitUp[0].length === 0){
    splitUp[1] += 'ay';
  }else{ //this string begins with a consonant
    splitUp[0] += 'ay';
    splitUp[1] += '-';
    splitUp.reverse();
  }

  return splitUp.join('');
}

function englishToPig(pigString) {
  // this converts english string to pig latin
}

module.exports = {
  pigToEnglish: pigToEnglish,
  englishToPig: englishToPig
};