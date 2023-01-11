import React from "react";

function ProductItem({image, price, name, group}) {
  return (
    
      <div className="pro">
        <img src={image} alt="" srcset="" />
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
        <a href="#">
          <i className="fal fa-shopping-cart cart"></i>
        </a>
      </div>
    
  );
}

export default ProductItem;
