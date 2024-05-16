import { useEffect, useState } from "react";

export const InfiniteScroll2 = () => {
  const [count, setCount] = useState(50);

  useEffect(
    function autoScroll() {
      function onscroll() {
        console.log("scrolly", scrollY);
        console.log(document.body.offsetHeight);
        if (
          window.innerHeight + window.scrollY >=
          window.document.body.offsetHeight - 30
        ) {
          setCount((prev) => prev + 50);
        }
      }
      window.addEventListener("scroll", onscroll);
    },
    [count]
  );

  return (
    <div>
      {Array(count)
        .fill(1)
        .map((_, index) => {
          return (
            <div
              key={index}
              style={{
                background: "gray",
                border: "1px solid black",
              }}
            >
              {index + 1}
            </div>
          );
        })}
    </div>
  );
};
