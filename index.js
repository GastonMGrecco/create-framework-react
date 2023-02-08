#!/usr/bin/env node
const { language } = require('./inquirer/language')

language.then((answer) => {
    if(answer.language === 'English'){
        const { english } = require('./builder/english');
        english();
    }else{
        const { spanish } = require('./builder/spanish');
        spanish();
    }
    
});