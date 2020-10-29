var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('testEvent', function () {
  console.log('Test event done');
});

eventEmitter.emit('testEvent');
