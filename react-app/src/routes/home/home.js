import { Fragment } from "react";
import Banner from "../../components/banner/banner.component";
import SmallBanner from "../../components/banner/smallBanner.component";
import Features from "../../components/features/features.component";
import Footer from "../../components/footer/footer.component";
import Newsletter from "../../components/newsletter/newsletter.component";
import Product from "../../components/products/product.component";
import Product1 from "../../components/products/product1.component";


const Home = () => {
  return (
    <Fragment>
      <section id="hero" style={{ backgroundImage: 'url("./img/hero4.png")' }}>
        <h4>Trade-in-offer</h4>
        <h2>Supper value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button style={{ backgroundImage: 'url("./img/button.png")' }}>
          Shop Now
        </button>
      </section>
      <Features />
      <Product />
      <Banner/>
      <Product1/>
      <SmallBanner/>
      <Newsletter/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
