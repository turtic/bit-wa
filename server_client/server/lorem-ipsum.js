var loremIpsum = require('lorem-ipsum')

const loremText = [];

class Post {
    constructor (title, para) {
        this.title = title;
        this.para = para;

    }
}


const headerText = function () {

    return loremIpsum({
        count: 3 // Number of words, sentences, or paragraphs to generate. 
            ,
        units: 'words' // Generate words, sentences, or paragraphs. 

    });

}


const bodyText = function () {

    return loremIpsum({
        count: 5 // Number of words, sentences, or paragraphs to generate. 
            ,
        units: 'sentences' // Generate words, sentences, or paragraphs. 

    });

}

for (let i = 0; i < 5; i++) {
    
    loremText.push(new Post (headerText(), bodyText()));
    
}



module.exports.loremText = loremText;