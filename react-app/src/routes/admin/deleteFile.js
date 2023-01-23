import React, { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/login/form-input/form-input.component";
import { styleButton } from "../authentication/authentication.component";

const defaultFormFields = {
  productName: "",
  productCategory: "",
};

function DeleteFile() {
  const [formFeilds, setFormFeilds] = useState(defaultFormFields);
  const {productName, productCategory} = formFeilds;
  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormFeilds({ ...formFeilds, [name]: value });
  };
  console.log(formFeilds)

  return (
    <div className="add-product-to-cart">
      <h2>Delete product</h2>
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
          label="productCategory"
          type="text"
          required
          onChange={handleChange}
          name="productCategory"
          value={productCategory}
        />

        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default DeleteFile;
