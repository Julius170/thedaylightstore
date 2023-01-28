import ProductItem from "../product-item/product-item.component";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

const ProductFullScreen = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap, "this is it guys");

  return (
    <section id="prodetails" class="section-p1">
        <div class="single-pro-image">
            <img src="img/products/f1.jpg" width="100%" id="MainImg" alt=""/>
            
        </div>

        <div class="single-pro-details">
            <h6>Home / T-shirt</h6>
            <h4>Men's Fashion T shirt</h4>
            <h2>$139.00</h2>
            <select>
                <option>Select size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
                <option>XLarge</option>
            </select>

            <input type="number" value="1"/>
            <button class="normal">Add to Cart</button>

        </div>
    </section>

  );
};

export default ProductFullScreen;