import React, { useState } from "react";

const InputDetails = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const ProductIdChange = (event) => {
    setEnteredId(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState("");
  const ProductAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredName, setEnteredName] = useState("");
  const [enterTotalAmount, setTotalAmount] = useState(0);
  const productNameChange = (event) => {
    setEnteredName(event.target.value);
  };
  const productSubmitHandler = (event) => {
    event.preventDefault();
    const productInput = {
      id: +enteredId,
      Amount: +enteredAmount,
      Name: enteredName,
    };
    props.onAddData(productInput);
    setEnteredId("");
    setEnteredAmount("");
    setEnteredName("");
  };

  const totalAmountHandler = () => {
    // let totalamount = totalamount + enteredAmount;
    setTotalAmount(+enteredAmount);
  };
  console.log(enterTotalAmount);
  return (
    <React.Fragment>
      <form onSubmit={productSubmitHandler}>
        <label htmlFor="Product_id">Product ID</label>
        <input
          type="number"
          value={enteredId}
          id="Product_id"
          onChange={ProductIdChange}
        />
        <label htmlFor="Selling_price"> Selling Price</label>
        <input
          type="number"
          id="Selling_price"
          value={enteredAmount}
          onChange={ProductAmountChange}
        />
        <label htmlFor="Product_Name">Product Name</label>
        <input
          type="text"
          id="Product_Name"
          onChange={productNameChange}
          value={enteredName}
        />
        <button type="submit" onClick={totalAmountHandler}>
          Add Product
        </button>
      </form>
    </React.Fragment>
  );
};
export default InputDetails;