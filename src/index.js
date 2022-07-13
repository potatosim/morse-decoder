const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const newTable = Object.keys(MORSE_TABLE).reduce(
  (acc, key) => {
    let newKey = key
      .split('')
      .map(item => {
        if (item === '.') {
          return '10';
        }
        return '11';
      })
      .join('')
      .padStart(10, '0');
    acc[newKey] = MORSE_TABLE[key];
    return acc;
  },
  { '**********': ' ' }
);

function decode(expr) {
  let arr = expr.split('');
  let result = [];
  while (arr.length) {
    result.push(arr.splice(0, 10));
  }
  return result
    .map(item => {
      return item.join('');
    })
    .map(item => newTable[item])
    .join('');
}

module.exports = {
  decode,
};
