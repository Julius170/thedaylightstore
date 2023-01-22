import { Fragment, useEffect, useState } from "react";
import Footer from "../../components/footer/footer.component";
import FormInput from "../../components/login/form-input/form-input.component";
import { styleButton } from "../authentication/authentication.component";
import Navigation from "../navigation/navigation";
import Button from "../../components/button/button.component";

export const Admin = () => {
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={()=>{}}
          name="email"
          value="byhy"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={()=>{}}
          name="password"
          value="byhy"
        />
        <div className="buttons-container">
          <Button type="submit" style={styleButton} className="normal">
            Sign In
          </Button>
   
        </div>
      </form>
    </div>
  );
};
