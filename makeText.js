/** Command-line tool to generate Markov text. */
const markov = require('./markov');
const fs = require('fs');
const axios  = require('axios');
const process = require('process');


function generateText(text) {
    let mm = new markov(text);
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        
        if(err) {
            console.log("Error: ", err);
            process.kill(1);
        }
        else {
            generateText(data);
        }   
    });
}

async function makeUrlText(path) {
    let response;

    try {
        response = await axios.get(path);        
    } 
    catch (err) {
        console.log("Error", err)
        process.kill(1);
    }  
    
    generateText(response);
}

let [method, path] = process.argv.slice(2);

if(method === "file") {
    makeText(path);
}
else if (method === "url") {
    makeUrlText(path);
}

else {
    console.error("No method provided");
    process.kill(1);
}