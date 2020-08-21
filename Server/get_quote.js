const fs = require('fs');
const randomInt = require('random-int');

function ran_quote(filename){
    var quote = [];
    // read contents of the file
    const data = fs.readFileSync(filename, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);
    
    lines.forEach((line) => {
        quote.push(line);
    });
    
    return quote[randomInt(0,quote.length)];
}

module.exports.ran_quote = ran_quote;
