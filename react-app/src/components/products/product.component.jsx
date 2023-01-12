import ProductItem from "../product-item/product-item.component";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const Product = () => {
  let array = [1, 2, 3, 4, 5, 6, 7];
  const {categoriesMap} = useContext(CategoriesContext)

  
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer Collection New Morden Design</p>
      <div className="pro-container">
        {array.map((x, i) => (
          <ProductItem
            key={i}
            image="./img/products/f5.jpg"
            price="79"
            name="Cartoon Astronaut T-Shirts"
            group="shirts"
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
