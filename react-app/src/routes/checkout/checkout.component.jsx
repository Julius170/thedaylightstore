import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import { styleButton } from "../authentication/authentication.component";
let res = ''
let obj = {}
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const {productName} = cartItem
        if(!obj[productName]){
          obj[productName] = productName
          res = res + ' *' + productName
        }
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      }
      )}
      <div className="total">TOTAL: ₦ {cartTotal}</div>
      <a
      href={`https://wa.me/+2349132681563?text=I want to purchase ${res}`}
        style={{
          ...styleButton,
          border: "none",
          padding: "1rem",
          margin: "2.3rem 0",
          borderRadius: "8px",
        }}
       
      >
        Buy Now
      </a>
    </div>
  );
};

export default Checkout;
