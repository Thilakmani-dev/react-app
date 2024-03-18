import { useEffect, useRef, useState } from "react";

export const InfiniteScroll = () => {
  const mainRef = useRef(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  function handleCallback(entries) {
    console.info("~entires", entries);
  }

  useEffect(function observeElement() {
    let observer = new IntersectionObserver(handleCallback);
    observer.observe(mainRef.current);
  }, []);

  async function loadData() {
    try {
      setIsLoading(true);
      let result = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await result.json();
      setData((prev) => [...prev, data]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function loadDataEffect() {
    loadData();
  });

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {isLoading && <div>......Loading</div>}
      <div ref={mainRef} />
    </div>
  );
};
