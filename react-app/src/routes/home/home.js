import { Fragment } from "react";
import Banner from "../../components/banner/banner.component";
import SmallBanner from "../../components/banner/smallBanner.component";
import Features from "../../components/features/features.component";
import Footer from "../../components/footer/footer.component";
import HomeFeaturedProducts from "../../components/home-featured-product/homeFeaturedProduct";
import Product from "../../components/products/product.component";

const Home = () => {
  return (
    <Fragment>
      <section id="hero" style={{ backgroundImage: 'url("./img/hero4.png")' }}>
        <h4>Passion-for-style </h4>
        <h2>Shop Now</h2>
        <h1>On all products</h1>
        <p>Welcome to Fashion Haven, your one-stop-shop for all things fashion.</p>
        <button style={{ backgroundImage: 'url("./img/button.png")' }}>
          Shop Now
        </button>
      </section>
      <HomeFeaturedProducts/>
      <Banner />
      <SmallBanner />
    </Fragment>
  );
};

export default Home;


