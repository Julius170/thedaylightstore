import './home.styles.scss'

const Home = () => {
  return (
    <section id="hero" style={{backgroundImage: 'url("./img/hero4.png")'}}>
      <h4>Trade-in-offer</h4>
      <h2>Supper value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <button style={{backgroundImage: 'url("./img/button.png")'}} >Shop Now</button>
    </section>
  );
};

export default Home;
