import React from "react";

function Product({ elementProduct, addtocart, updateQuantity, cartProduct }) {
  console.log(cartProduct);
  const clickAddtocart = (product) => {
    addtocart(product);
  };

  return (
    <div>
      <div className="image">
        <img src={elementProduct.image} alt="" />
      </div>
      <div className="content-product">
        <h4>{elementProduct.title}</h4>
        <span>
          by <b>jenny Matt</b> -Feb 12, 2022
        </span>
        <p>{elementProduct.price}$</p>
        <div className="button-addtocart">
          <div className="add-to-cart">
            <button onClick={() => clickAddtocart(elementProduct)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
