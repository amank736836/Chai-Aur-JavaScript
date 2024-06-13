const coding = ['JavaScript', 'Python', 'Java', 'Rust'];

coding.forEach( function (language){
    // console.log(`Language: ${language}`);
});

coding.forEach( (language) => {
    // console.log(`Language: ${language}`);
});

function printMe(item){
    console.log(`Item: ${item}`);
}

// coding.forEach(printMe);

coding.forEach((language, index ) => {
    // console.log(`Index: ${index} - Language: ${language}`);
    });

coding.forEach((language, index ,arr) => {
    // console.log(`Index: ${index} - Language: ${language} - Array: ${arr}`);
});

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Python',
        languageFileName : 'py'
    },
    {
        languageName : 'Java',
        languageFileName : 'jp'
    },
    {
        languageName : 'Rust',
        languageFileName : 'rs'
    }
]

myCoding.forEach((language, index) => {
    console.log(`Index: ${index} - Language: ${language.languageName} - File: ${language.languageFileName}`);
});