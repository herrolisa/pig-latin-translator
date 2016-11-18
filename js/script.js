var engToPigBtn = document.getElementById('translation-btn');
engToPigBtn.addEventListener('click', translateToPig);

function translateToPig() {
  var input = document.getElementById('translation-input').value;
  var outputContainer = document.getElementById('translated');
  var output = document.getElementById('translated-text');
  if (input === ""){
    if (document.getElementById('translation-input').placeholder === 'Please type something to translate.'){
      document.getElementById('translation-input').placeholder = 'This translator works best when you type in text to translate.';
    }else{
      document.getElementById('translation-input').placeholder = 'Please type something to translate.';
    }
  }else{
    var translated = englishToPig(input);
    output.innerHTML = translated;
    outputContainer.setAttribute("style", "display:block");
  }
}

function englishToPig(engString){
  if (typeof engString !== 'string'){
    throw new Error();
  }
  //1. seperate sentence into array
  var seperate = engString.split(' ');
  for (var i = 0; i < seperate.length; i++){
    //2. take each word and split based on if it starts with vowel or consonant
    var splitUp = seperate[i].split(/([aeiouyAEIOUY].*)/);
    //this string starts with a vowel
    if (splitUp[0].length === 0){
      splitUp[1] += 'ay';
    }else if (splitUp.length === 1){ //this string does not have vowels
      splitUp[0] +='-ay';
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
