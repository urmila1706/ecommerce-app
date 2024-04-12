import React from "react";
import ProductDetails from "./ProductDetails";
const ProductList = (props) => {
  //console.log(props);
  return (
    <React.Fragment>
      <h1>Products</h1>
      {props.sellarsData.map((seller) => {
        return (
          <div key={seller.id}>
            <ProductDetails
              id={seller.id}
              amount={seller.Amount}
              name={seller.Name}
            ></ProductDetails>
          </div>
          
        );
      })}
      <ul></ul>
    </React.Fragment>
  );
};
export default ProductList;