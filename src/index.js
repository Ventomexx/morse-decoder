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
    let strNull = '0000000000';
    result = '';
    function replaceStr (Char) {
     Char = Char.replace(/\./g, "10").replace(/\-/g, "11");
     result += strNull.substr(0, strNull.length - Char.length) + Char;
    }
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] == ' ') {result +='**********'}
    for (let key in MORSE_TABLE) {
      if (MORSE_TABLE[key] === expr[i]) {replaceStr(key)}
    }
    }
    return result
}

module.exports = {
    decode
}
