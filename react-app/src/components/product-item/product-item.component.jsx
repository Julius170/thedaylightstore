import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function ProductItem({ image, price, name, group }) {
  return (
    <div className="pro">
      <img src={image} alt="" srcset="" style={{ width: "14rem" }} />

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

      <div className="cart">
        <i class="fa-sharp fa-solid fa-cart-shopping "></i>
      </div>
    </div>
  );
}

export default ProductItem;
