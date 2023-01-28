import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./product-item.styles.scss";

function ProductItem({ group, product }) {
  const { setChangeSize, addItemToCart } = useContext(CartContext);
  const { imageUrl, price, name } = product;
  const addProductToCart = () => {
    setChangeSize(true)
    return addItemToCart(product);
  };
  return (
    <div className="pro">
      <img
        src={imageUrl}
        alt=""
        srcset=""
        style={{ width: "14rem", height: "20rem" }}
      />

      <div className="des">
        <span>{group}</span>
        <h5>{name}</h5>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>${price}</h4>
      </div>

      <div className="cart" onClick={addProductToCart}>
        <i class="fa-sharp fa-solid fa-cart-shopping "></i>
      </div>
    </div>
  );
}

export default ProductItem;
