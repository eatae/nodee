var log = require('./logger')(module);
var user = require('./user/index');
var db = require('./db/index');


log(user);
log(db.getPhrase('Run success'));

function run() {
    let vasya = new user.User('Вася');
    let petya = new user.User('Петя');
    vasya.hello(petya);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
