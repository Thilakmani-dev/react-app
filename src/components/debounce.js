function debounce(cb, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb.apply(this, args), delay);
  };
}

export { debounce, throttle };

function throttle(cb, delay) {
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;
    cb.apply(this, args);
    shouldWait = true;
    setTimeout(() => (shouldWait = false), delay);
  };
}
