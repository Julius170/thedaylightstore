import { Fragment } from "react";
import Product from "../../components/products/product.component";
import Search from "../../components/search/search.component";

const Shop = () => {
  return (
    <Fragment>
      <Search />
      <Product />
    </Fragment>
  );
};

export default Shop;
