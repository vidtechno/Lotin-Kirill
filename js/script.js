const latinToCyrillicMap = {
  'a': 'а',
  'b': 'б',
  'c': 'ц',
  'd': 'д',
  'e': 'е',
  'f': 'ф',
  'g': 'г',
  'h': 'ҳ',
  'i': 'и',
  'j': 'й',
  'k': 'к',
  'l': 'л',
  'm': 'м',
  'n': 'н',
  'o': 'о',
  'p': 'п',
  'q': 'қ',
  'r': 'р',
  's': 'с',
  't': 'т',
  'u': 'у',
  'v': 'в',
  'w': 'в',
  'x': 'х',
  'y': 'й',
  'z': 'з',
  "'": "ъ"
};

const cyrillicToLatinMap = {
  'а': 'a',
  'б': 'b',
  'ц': 's',
  'д': 'd',
  'е': 'e',
  'ф': 'f',
  'г': 'g',
  'ҳ': 'h',
  'х': 'x',
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

let isLatinToCyrillic = true;

function translateText(text) {
  const translationMap = isLatinToCyrillic ? latinToCyrillicMap : cyrillicToLatinMap;

  let translatedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i).toLowerCase();
    if (translationMap.hasOwnProperty(char)) {
      translatedText += translationMap[char];
    } else {
      translatedText += char;
    }
  }

  translatedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const lowercaseChar = char.toLowerCase();
    const translatedChar = translationMap[lowercaseChar];

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
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.textContent = isLatinToCyrillic ? "Lotin-Kirill" : "Kirill-Lotin";
  const leftTextarea = document.getElementById("leftTextarea");
  const rightTextarea = document.getElementById("rightTextarea");
  rightTextarea.value = translateText(leftTextarea.value);
}

function copyTranslation() {
  const rightTextarea = document.getElementById("rightTextarea");
  rightTextarea.select();
  document.execCommand("copy");
}
  
const leftTextarea = document.getElementById("leftTextarea");
leftTextarea.addEventListener("input", function () {
  const rightTextarea = document.getElementById("rightTextarea");
  rightTextarea.value = translateText(leftTextarea.value);
});
