const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
  let string = '';
  function replaceStr (char) {
     char = char.replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "")
     for (let key in MORSE_TABLE) {key === char ? result += MORSE_TABLE[key] : result = result};
    }
  
  for (let i = 0; i<expr.length; i = i+10) {
    string = expr.slice(i, i + 10);
    if (string === '**********') {result += ' '}
    else {replaceStr(string)}
  };
return result;
}

module.exports = {
    decode
}
