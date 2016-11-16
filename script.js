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
