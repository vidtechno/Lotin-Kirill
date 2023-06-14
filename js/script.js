var latinToCyrillicMap = {
  'a': 'а',
  'b': 'б',
  'c': 'ц',
  'd': 'д',
  'e': 'е',
  'f': 'ф',
  'g': 'г',
  'h': 'х',
  'i': 'и',
  'j': 'й',
  'k': 'к',
  'l': 'л',
  'm': 'м',
  'n': 'н',
  'o': 'о',
  'p': 'п',
  'q': 'к',
  'r': 'р',
  's': 'с',
  't': 'т',
  'u': 'у',
  'v': 'в',
  'w': 'в',
  'x': 'кс',
  'y': 'й',
  'z': 'з',
  "'": "ъ"
};

var cyrillicToLatinMap = {
  'а': 'a',
  'б': 'b',
  'ц': 's',
  'д': 'd',
  'е': 'e',
  'ф': 'f',
  'г': 'g',
  'х': 'h',
  'и': 'i',
  'й': 'j',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'в': 'v',
  'з': 'z',
  "ъ": "'",
  "ь": "",
  "ы": "i"
};

var isLatinToCyrillic = true;

function translateText(text) {
  var translationMap = isLatinToCyrillic ? latinToCyrillicMap : cyrillicToLatinMap;

  var translatedText = '';
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i).toLowerCase();
    if (translationMap.hasOwnProperty(char)) {
      translatedText += translationMap[char];
    } else {
      translatedText += char;
    }
  }
  var translationMap = isLatinToCyrillic ? latinToCyrillicMap : cyrillicToLatinMap;

  var translatedText = '';
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var lowercaseChar = char.toLowerCase();
    var translatedChar = translationMap[lowercaseChar];

    if (translatedChar !== undefined) {
      if (char === lowercaseChar) {
        translatedText += translatedChar;
      } else {
        translatedText += translatedChar.toUpperCase();
      }
    } else {
      translatedText += char;
    }
  }
  return translatedText;
}

function toggleTranslation() {
  isLatinToCyrillic = !isLatinToCyrillic;
  var toggleButton = document.getElementById("toggleButton");
  toggleButton.textContent = isLatinToCyrillic ? "Lotin-Kirill" : "Kirill-Lotin";
  var leftTextarea = document.getElementById("leftTextarea");
  var rightTextarea = document.getElementById("rightTextarea");
  rightTextarea.value = translateText(leftTextarea.value);
}

function copyTranslation() {
  var rightTextarea = document.getElementById("rightTextarea");
  rightTextarea.select();
  document.execCommand("copy");
}

var leftTextarea = document.getElementById("leftTextarea");
leftTextarea.addEventListener("input", function () {
  var rightTextarea = document.getElementById("rightTextarea");
  rightTextarea.value = translateText(leftTextarea.value);
}); 