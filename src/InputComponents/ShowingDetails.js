import React, { useState } from "react";
import InputDetails from "./InputComponents";
import DisplayTotalAmount from "../DisplayDetails/DisplayTotalAmount";
import ProductList from "../DisplayDetails/ProductList";
const ShowDetials = (props) => {
  const [enteredData, setEnteredData] = useState([]);
  const userDataHandler = (data) => {
    console.log(data);
    setEnteredData((prevData, amountt) => {
      const final = [...prevData, data];
      console.log(data.id);
      let str = JSON.stringify(final);
      localStorage.setItem(data.id, str);
      console.log(enteredData);
      return final;
    });
  };
  return (
    <React.Fragment>
      <InputDetails onAddData={userDataHandler}></InputDetails>
      <ProductList sellarsData={enteredData} />
      <DisplayTotalAmount />
    </React.Fragment>
  );
};
export default ShowDetials;