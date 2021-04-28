var converter = require('number-to-words');
console.log(converter.toWords(1300000));

var letra = require('numalet')({unidad: 'M.N', mayus: false});
console.log(letra(1523.32));