import { useRef } from "react";
import { useDebounce } from "./hooks";

import { debounce } from "./debounce";

export const SearchInput = () => {
  const timerRef = useRef(null);

  function onSearchHandler(e) {
    console.info("~e", e);
  }

  // const debounce = (func, seconds) => {
  //   return function (...args) {
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }
  //     timerRef.current = setTimeout(() => {
  //       func.apply(this, args);
  //     }, seconds * 1000);
  //   };
  // };

  const searchHandler = throttle(onSearchHandler, 3000);
  // const searchHandler = useDebounce(onSearchHandler, 3000);

  //throttle

  function onChangeHandler(e) {
    console.info("~on change", e);
  }

  function throttle(func) {
    let inThottle;
    return function (...args) {
      if (!inThottle) {
        func.apply(this, args);
        inThottle = true;
        setTimeout(() => (inThottle = false), 2000);
      }
    };
  }

  const changeHandler = throttle(onChangeHandler);
  return (
    <div>
      <input type="search" onChange={searchHandler} />
      <input type="name" onChange={changeHandler} />
    </div>
  );
};
