import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
function ListProduct() {
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = async () => {
    await fetch(
      "https://e-commerce-website-backend-u54s.onrender.com/allproducts"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch(
      "https://e-commerce-website-backend-u54s.onrender.com/removeproduct",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }
    );
    await fetchInfo();
  };

  return (
    <div className="ListProduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  className="listproduct-product-icon"
                  alt=""
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  src={cross_icon}
                  className="listproduct-remove-icon"
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ListProduct;
