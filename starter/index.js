const fs = require('fs');

const textIn = fs.readFileSync('/Users/isaiahm/Developer/Node-Course/1-node-farm/starter/txt/input.txt', 'utf-8');    //Syncronous version of file reading
console.log(textIn);

/*
takes two arguments:
1 - path to file we are reading (avacado text file)
2 - charachter encoding (utf-8 standard)
- If not specified a buffer is returned

We are going to read the text about an avacado
*/


//Outputing
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date}`;
fs.writeFileSync('./txt/output.txt', textOut);
/*
Const = ES6 alt to using var to create variables
Will use the ES6 template string to format our string output
- Syntax:
    `Text we are adding data to ${outside Data or data we want to format}`
writeFileSync('path', <outputing to file>)
*/