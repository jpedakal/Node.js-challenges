const { EventEmitter } = require('events');
const Counter = function(i) { // Takes a starting number
    this.increment = function() { // The counter's increment method
      i++; // Increment the count we hold
      this.emit('incremented', i); // Emit an event named incremented
    }
  }

  Counter(2);