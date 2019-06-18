const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter{}

// init
const myEmitter = new MyEmitter();

// event listener
myEmitter.once('event',()=>console.log('Event Fired!'));


//init event
myEmitter.emit('event');