import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";
import Footer from "../../components/footer/footer.component";

const Authentication = () => {
  const styleButton = {backgroundColor: "#088178", color: "white"}
  return (
    <div className="authentication-container">
      <SignInForm styleButton={styleButton}/>
      <SignUpForm styleButton={styleButton}/>
    </div>
  );
};

export default Authentication;
