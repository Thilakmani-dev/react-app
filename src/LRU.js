//least recently used

class LRU {
  constructor(cache = {}, maxLimit = 5) {
    this.cache = cache;
    this.maxLimit = maxLimit;
    this.cacheSize = Object.keys(cache).length;
  }
  getVal(key) {
    let value = this.cache[key];
    if (value) {
      delete this.cache[key];
      this.cache = { [key]: value, ...this.cache };
    }
    return value;
  }
  setKey(key, val) {
    if (this.cacheSize < this.maxLimit) {
      console.log("set");
      this.cache[key] = val;
      this.cacheSize++;
      return;
    }
    console.log("not able to set");
  }
}

const lru = new LRU(
  {
    name: "mani",
    age: 20,
    job: "developer",
    city: "madurai",
    id: 2002,
  },
  6
);

lru.setKey("status", "married");
lru.setKey("company", "hcl");
lru.getVal("job");
lru.getVal("status");
console.log(lru);
