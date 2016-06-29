function englishToPig(engString){
  if (typeof engString !== 'string'){
    throw new Error();
  }
  //1. seperate sentence into array
  var seperate = engString.split(' ');
  for (var i = 0; i < seperate.length; i++){
    //2. take each word and split based on if it starts with vowel or consonant
    var splitUp = seperate[i].split(/([aeiouAEIOU].*)/);
    //this string starts with a vowel
    if (splitUp[0].length === 0){
      splitUp[1] += 'ay';
    }else{ //this string begins with a consonant
      splitUp[0] += 'ay';
      splitUp[1] += '-';
      splitUp.reverse();
    }
    //3. put the word back together
    seperate[i] = splitUp.join('');
  }
  //4. put the sentence back together
  return seperate.join(' ');
}

function pigToEnglish(pigString) {
  if (typeof pigString !== 'string'){
    throw new Error();
  }
  //1. seperate sentence into array
  var seperate = pigString.split(' ');
  //2. take each word and remove/move the end based on if appended with "ay" or "'-' + consonant + 'ay'"
  for (var i = 0; i < seperate.length; i++) {
    //this will be an English word that begins with a vowel
    if (seperate[i].indexOf('-') === -1){
      seperate[i] = seperate[i].slice(0, -2);
    }else{ //this will be an English word that begins with a consonant
      var clippedEnd = seperate[i].slice(0, -2);
      seperate[i] = clippedEnd.split('-').reverse().join('');
    }
  }
  //3. put the sentence back together
  return seperate.join(' ');
}

module.exports = {
  englishToPig: englishToPig,
  pigToEnglish: pigToEnglish
};