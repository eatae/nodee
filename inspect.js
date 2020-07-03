var util = require('util');

var obj = {
    a: 5,
    b: 6,
    inspect: function() {
        return 123;
    },
};
obj.self = obj;

//console.log(util.inspect(obj));

var str = util.format("My %s %d %j", "string", 123, {test:"obj"});
console.log(str);
