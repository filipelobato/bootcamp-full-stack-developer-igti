import ev from './events.js';

// adiciona evento ao listener
ev.on('testEvent', () => {
  console.log('Ouviu também');
});

ev.emit('testEvent', 'blabla');
