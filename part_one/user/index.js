let db = require('../db/index');

db.connect();

function Index(name) {
    this.name = name;
}

Index.prototype.hello = function(who) {
    console.log(db.getPhrase('Hello') +", "+ who.name + '!');
};

exports.User = Index;
