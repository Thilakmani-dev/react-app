function dummyAPI(time, shouldFail = false) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function callAPI() {
      if (shouldFail) {
        reject(`rejected in ${time}`);
      }
      resolve(`resolved in ${time}`);
    }, time);
  });
  return promise;
}

let promisesList = [
  dummyAPI(2000, true),
  dummyAPI(4000),
  dummyAPI(5000),
  dummyAPI(1000, false),
];

Promise.customAll = function (promisesArr) {
  let res = [];
  let isPending = promisesArr.length;
  return new Promise((resolve, reject) => {
    if (!promisesArr.length) {
      resolve(res);
    }
    promisesArr.forEach((promise, index) => {
      promise
        .then((response) => {
          res[index] = response;
          isPending--;
          if (isPending === 0) {
            resolve(res);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.customRace = function (promisesArr) {
  return new Promise((resolve, reject) => {
    promisesArr.forEach((promise) =>
      promise.then((response) => resolve(response)).catch((err) => reject(err))
    );
  });
};

Promise.customAny = function (promisesArr) {
  return new Promise((resolve, reject) => {
    promisesArr.forEach((promise) =>
      promise.then((response) => resolve(response)).catch((err) => reject(err))
    );
  });
};

Promise.customRace(promisesList)
  .then((response) => console.log("promise race", response))
  .catch((err) => console.log("promise race", err));

Promise.customAny(promisesList)
  .then((response) => console.log("promise race", response))
  .catch((err) => console.log("promise race", err));
