class EventEmitter {
  constructor() {
    // Create a Map to store event names and their corresponding callbacks
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    // Check if the event name already exists in the Map
    if (!this.events.has(eventName)) {
      // If not, create a new entry in the Map with an empty array as the initial value
      this.events.set(eventName, []);
    }

    // Get the array of callbacks for the event name
    const subscribers = this.events.get(eventName);

    // Create a function to unsubscribe the callback from the subscribers array
    const unsubscribe = () => {
      // Find the index of the callback in the subscribers array
      const index = subscribers.indexOf(callback);

      // If the callback is found, remove it from the subscribers array
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };

    // Add the callback to the subscribers array
    subscribers.push(callback);

    // Return an object with an unsubscribe method to allow for unsubscribing
    return { unsubscribe };
  }

  emit(eventName, args = []) {
    // Get the array of callbacks for the event name
    const subscribers = this.events.get(eventName);

    // If no callbacks are subscribed to the event, return an empty array
    if (!subscribers) {
      return [];
    }

    // Create an array to store the results of each callback call
    const results = [];

    // Iterate over each callback in the subscribers array
    for (const callback of subscribers) {
      // Call the callback function with the provided arguments and store the result
      results.push(callback(...args));
    }

    // Return the array of results
    return results;
  }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
