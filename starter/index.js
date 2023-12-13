const fs = require('fs');

// // //Blocking Syncronous way
// // const textIn = fs.readFileSync('/Users/isaiahm/Developer/Node-Course/1-node-farm/starter/txt/input.txt', 'utf-8');    //Syncronous version of file reading
// // //console.log(textIn);

// // /*
// // takes two arguments:
// // 1 - path to file we are reading (avacado text file)
// // 2 - charachter encoding (utf-8 standard)
// // - If not specified a buffer is returned

// // We are going to read the text about an avacado
// // */


// //Outputing
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// /*
// Const = ES6 alt to using var to create variables
// Will use the ES6 template string to format our string output
// - Syntax:
//     `Text we are adding data to ${outside Data or data we want to format}`
// writeFileSync('path', <outputing to file>)
// */

//Non-Blocking Asyncronous way
fs.readFile('./txt/start.txt', 'utf-8' , (err, data1) => { 
    fs.readFile(`/Users/isaiahm/Developer/Node-Course/1-node-farm/starter/txt/${data1}.txt`, 'utf-8' , (err, data2) => { 
        console.log(data2);
        fs.readFile(`/Users/isaiahm/Developer/Node-Course/1-node-farm/starter/txt/append.txt`, 'utf-8' , (err, data3) => {
            console.log(data3);

            //Write contents of these files to a single string in a file
            fs.writeFile('./txt/final.txt', `${data2}\n-> ${data3}`, 'utf-8', err => {  //No data so there can only be an error
                console.log("Your file has been written");
            })
        })
    })
}); 
console.log("Im first"); //Ouptut befor the call-back function above because not processing any data