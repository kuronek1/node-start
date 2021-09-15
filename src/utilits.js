const fs = require('fs/promises');
const { lowerFirst } = require('lodash');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

 
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence:{
        max:16,
        min: 4,
    }
});


fs.readFile('./src/Readme.txt', 'utf8')
    .then((data) => { 
        const value = lorem.generateWords(8);;
        const text = `FILE REWRITE \nOLD CONTENT: ${data}NEW CONTENT: ${value}`
        
        fs.writeFile('./Readme.txt', text, 'utf8')
            .then(()=> {
                console.log('File saved');
            })

        fs.appendFile('./Readme.txt','\nAdded on end file!')
            .then(()=> {
                console.log('Success!');
            })    
    }
)


/* fs.mkdir('./tmp')
.then((err) => {
    console.log('success');
})
 
fs.writeFile('./tmp/info.txt', 'Hello world and Node JS')
.then((err) => {
    console.log('success');
}) */
