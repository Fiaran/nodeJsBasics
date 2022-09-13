const EventEmitter = require('events');

// on() - создание слежения за событием
// emit() - вызов события

class Logger extends EventEmitter{
    log(message){
        this.emit('message',`${message}, ${Date.now()}`)
    }
}

const logger = new Logger();
logger.on('message', data =>{
    console.log(data);
})

logger.log('Hello');