const Footer = () => {
  return (
    <footer  class="section-p1">
      <div class="col">
        <img class="logo" src="./img/logo.png" alt="" />
        <h4>Contact</h4>
        <p>
          <strong>Phone:</strong> +234 564 477 837
        </p>
        <div class="follow">
          <h4>Follow us</h4>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest-p"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div class="col">
        <h4>About</h4>
        <a href="">About us</a>
        <a href="">Delivery Information</a>
        <a href="">Privacy Policy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Contact Us</a>
      </div>

      <div  class="col">
        <h4 >My Account</h4>
        <a href="">Sign in</a>
        <a href="">View Cort</a>
        <a href="">My Wishlist</a>
        <a href="">Track My Order</a>
        <a href="">Help</a>
      </div>
    </footer>
  );
};

export default Footer;
