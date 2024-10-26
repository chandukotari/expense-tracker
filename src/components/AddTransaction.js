import React from "react";
import { useState } from "react";
const AddTransaction = (props) => {
  const [record, setRecord] = useState({});
  function handleChange(event) {
    const input = event.target.id;
    const amount = event.target.value;
    //console.log(input, amount);

    setRecord((prevRecord) => {
      return {
        ...prevRecord,
        [input]: input === "amount" ? Number(amount) : String(amount),
      };
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    //console.log(record);
    {props.addFunction(record)}
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            id="text"
            onChange={handleChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            onChange={handleChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={handleSubmit}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
