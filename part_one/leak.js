const EventEmmiter = require('events').EventEmitter;

const db = new EventEmmiter();

function Request() {
    let self = this;
    this.bigData = new Array(1e6).join('*');
    this.send = function(data) {
        console.log(data);
    };
    this.onError = function(){
        self.send("Problem");
    };

    db.on('data', function(info) {
        self.send(info);
    });
}

setInterval(function(){
    let request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);
