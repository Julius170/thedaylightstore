import React, { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/login/form-input/form-input.component";
import { styleButton } from "../authentication/authentication.component";

const addProductHandler = {
  productName: '',
  productImage: '',
  productPrice: '',
  groupName: '',
}

function Addfile() {
  const [addProduct, setAddProduct] = useState(addProductHandler)
  const {productName, productImage, productPrice, groupName} = addProduct

  const handleChange = (event) => {
    const {name, value} = event.target

    setAddProduct(prev => ({...prev, [name]: value})) 
    console.log(addProduct)
  }
  return (
    <div className="add-product-to-cart">
      <h2>Add new product</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput
          label="productName"
          type="text"
          required
          onChange={handleChange}
          name="productName"
          value={productName}
        />

        <FormInput
          label="productImage"
          type="text"
          required
          onChange={handleChange}
          name="productImage"
          value={productImage}
        />

        <FormInput
          label="productPrice"
          type="text"
          required
          onChange={handleChange}
          name="productPrice"
          value={productPrice}
        />

        <FormInput
          label="groupName"
          type="text"
          required
          onChange={handleChange}
          name="groupName"
          value={groupName}
        />

        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Addfile;
