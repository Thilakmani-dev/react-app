import { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    console.log(page * 10 - 10);
    let result = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    let data = await result.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };

  function goToPrev() {
    setPage((prev) => {
      if (prev > 1) return prev - 1;
      else return prev;
    });
  }

  function goToNext() {
    setPage((prev) => {
      if (prev < 10) return prev + 1;
      else return prev;
    });
  }

  useEffect(
    function getProducts() {
      fetchProducts();
    },
    [page]
  );

  function sortFromHighest() {
    setProducts((prev) => [...prev.sort((a, b) => b.price - a.price)]);
  }

  function sortFromLowest() {
    setProducts((prev) => [...prev.sort((a, b) => a.price - b.price)]);
  }
  return (
    <>
      <div className="topBar">
        <h4>Shopping</h4>
        <ul>
          <li onClick={sortFromHighest}>High Price</li>
          <li onClick={sortFromLowest}>Low Price</li>
        </ul>
      </div>
      <div className="paginationWrapper">
        {products.length > 0 &&
          products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.images[0]} />
              <p>{product.title}</p>
            </div>
          ))}
      </div>
      <div className="pageNavigation">
        <span className="prevPage pageNumber" onClick={goToPrev}>
          Prev
        </span>
        {Array(10)
          .fill(1)
          .map((item, index) => {
            return (
              <span
                className={`pageNumber ${page === index + 1 ? "active" : ""}`}
                onClick={() => setPage(index + 1)}
                key={Math.floor(Math.random() * 100)}
              >
                {index + 1}
              </span>
            );
          })}
        <span className="nextPage pageNumber" onClick={goToNext}>
          Next
        </span>
      </div>
    </>
  );
};

export default Pagination;
