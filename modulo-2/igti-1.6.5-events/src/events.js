import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();
eventEmitter.on('testEvent', (obj) => {
  console.log(obj);
});

eventEmitter.emit('testEvent', 'abc');

eventEmitter.emit('testEvent', 'abc15465789788');

export default eventEmitter;
