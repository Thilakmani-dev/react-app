import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(
    function fetchData() {
      async function getProducts() {
        try {
          let response = await fetch(url);
          let result = await response.json();
          if (result) {
            console.info("result", result);
            setData(result.products);
          }
        } catch (error) {
          setError(error);
          console.error("error while fetching products", error);
        } finally {
          setIsLoading(false);
        }
      }
      getProducts();
      return () => {
        setData([]);
        //function to cleanup when component unmounts
      };
    },
    [url]
  );

  return { data, isLoading, error };
};

const Products = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");
  if (data.length) {
    console.info("products", data);
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export { Products };
