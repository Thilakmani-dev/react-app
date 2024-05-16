/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";

import ShopReducer from "./shopReducer";

const Shop = () => {
  const [state, dispatch] = useReducer(ShopReducer, { products: [], cart: [] });

  useEffect(function onInit() {
    fetchShopDetails();
  }, []);

  async function fetchShopDetails() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    console.log(data);
    dispatch({ payload: data.products, type: "ADD_PRODUCTS" });
  }

  return state.products.length === 0 ? (
    <p>No Products</p>
  ) : (
    <div>
      {state.products.map((product) => {
        const { id } = product;
        return <Card key={id} {...product} />;
      })}
    </div>
  );
};

const Card = (props) => {
  const { title, description, thumbnail } = props;
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Shop;
