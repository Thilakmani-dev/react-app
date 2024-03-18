class LRU {
  constructor(max = 5) {
    this.cache = new Map();
    this.max = max;
  }
  setVal(key, val) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size === this.max) this.cache.delete(this.getFirst());
    this.cache.set(key, val);
  }
  getVal(key) {
    let val = this.cache.get(key);
    if (val) {
      this.cache.delete(key);
      this.cache.set(key, val);
    }
  }
  getFirst() {
    return this.cache.keys().next().value;
  }
}

const lru = new LRU();
lru.setVal("name", "thilak");
lru.setVal("age", 25);
lru.setVal("job", "ase");
lru.setVal("company", "kissflow");
lru.setVal("id", 1002);
lru.setVal("city", "madurai");
lru.getVal("age");
console.log(lru.cache);
