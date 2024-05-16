class Emitter {
  constructor() {
    this.events = {};
  }
  emit(eventName, args = []) {
    let res = [];
    (this.events[eventName] ?? []).forEach((cb) => {
      res.push(cb(...args));
    });
    return res;
  }
  subscribe(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = new Set();
    }
    this.events[eventName].add(callback);
    return {
      unsubsribe: function () {
        this.events[eventName].delete(callback);
      },
    };
  }
}

function onClickHandler() {
  console.log("clicking");
}

function onPressHandler() {
  console.log("pressing");
}

const emitter = new Emitter();

const clickSub = emitter.subscribe("onClick", onClickHandler);
const pressSub = emitter.subscribe("onPress", onPressHandler);

emitter.emit("onClick");
emitter.emit("onPress");
