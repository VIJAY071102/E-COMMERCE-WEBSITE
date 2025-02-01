import React, { useEffect, useState } from "react";
import "./Popular.css";
// import data_product from "../../assets/data";
import Items from "../Items/Items";
function Popular() {
  const [popularProduct, setPopularProduct] = useState([]);
  useEffect(() => {
    fetch("https://e-commerce-website-lbdc.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularProduct(data));
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProduct.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
