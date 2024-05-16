//event emitter

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName, ...args) {
    const callbacks = this.events[eventName];
    callbacks.forEach((callback) => callback(args));
  }
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((item) => {
        console.log("item", item, callback);
        return item !== callback;
      });
    }
  }
}

const event = new EventEmitter();
event.on("click", (a, b) => console.log("clicked", a, b));
event.emit("click", "mani", "thilak");
console.log(event);
event.off("click", (a, b) => console.log("clicked", a, b));
console.log(event);
