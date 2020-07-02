let phrases;

exports.connect = function(){
    phrases = require('./ru.json');
};

exports.getPhrase = function(name){
    if( !phrases[name] ) {
        throw new Error('Нет такой фразы');
    }
    return phrases[name];
};