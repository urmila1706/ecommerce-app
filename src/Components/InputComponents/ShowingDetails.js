import React, { useState } from "react";
import InputDetails from "./InputComponents";
import DisplayTotalAmount from "../DisplayDetails/DisplayTotalAmount";
import ProductList from "../DisplayDetails/ProductList";
const ShowingDetials = (props) => {
  const [enteredData, setEnteredData] = useState([]);
  const [enterTotalAmount, setTotalAmount] = useState(0);
  const userDataHandler = (data) => {
    console.log(data);
    setEnteredData((prevData) => {
      const final = [...prevData, data];
      console.log(data.id);
      let str = JSON.stringify(final);
      localStorage.setItem(data.id, str);
      console.log(enteredData);
      return final;
    });

    setTotalAmount((enterTotalAmount)=>{
      return enterTotalAmount+parseFloat((data.Amount),0)
          });
  };
  return (
    <React.Fragment>
      <InputDetails onAddData={userDataHandler}></InputDetails>
      <ProductList sellarsData={enteredData} />
      <DisplayTotalAmount amount={enterTotalAmount} />
    </React.Fragment>
  );
};
export default ShowingDetials;