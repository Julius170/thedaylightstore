import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <section id="header">
      <a href="#" id="header__logo">
        DL<span>S.</span>
      </a>

      <div>
        <ul id="header__navbar" class="">
          <li class="navbar_links">
            <a href="./" class="active">
              Home
            </a>
          </li>
          <li class="navbar_links">
            <a href="shop.html">shop</a>
          </li>
          <li class="navbar_links">
            <a href="blog">login</a>
          </li>
          <li class="navbar_links">
            <a href="about">about</a>
          </li>
          <li class="navbar_links">
            <a href="contact">contact</a>
          </li>
          <li>
            <a href="#">
              <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>

      <div id="mobile">
        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
        <i id="bar" class="fa-solid fa-bars"></i>
      </div>
    </section>
  );
};

export default Navigation;
