import React from "react";
const ProductDetails = (props) => {
  const DeleteTheData = (event) => {
    event.target.parentNode.remove();
  };
  return (
    <React.Fragment>
      <li>
        {props.id} -- {props.amount} -- {props.name}
      </li>
      <button type="submit" onClick={DeleteTheData}>
        Delete Product
      </button>
    </React.Fragment>
  );
};
export default ProductDetails;