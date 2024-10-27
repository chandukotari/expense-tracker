import React from "react";
import { useState } from "react";
const AddTransaction = (props) => {
  const [record, setRecord] = useState({
    text: "",
    amount: "",
  });
  ///To handle change in text and amount
  function handleChange(event) {
    const input = event.target.id;
    const amount = event.target.value;
    //console.log(input, amount);

    setRecord((prevRecord) => {
      return {
        ...prevRecord,
        [input]: input === "amount" ? Number(amount) : String(amount),
        ///if change is in text, text object is updated
        ///else amount is updated using ternary operator
      };
    });
  }
  ///To handle button click
  function handleSubmit(event) {
    ///To prevent page reloading when submit button is clicked
    event.preventDefault();
    //console.log(record);

    ///Calling add item function in App.js
    if (record.amount != 0 && record.text != ""&& isOnlySpace(record.text)!=true) {
      props.addFunction(record);
      
    }
    setRecord({
      text: "",
      amount: "",
    });
  }
  function isOnlySpace(text) {
    var onlySpace = true;
    for (var i = 0; i < text.length&&onlySpace; i++) {
      if(text[i]!=" ")
      {
        onlySpace=false
      }
    }
    return onlySpace
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
            value={record.text}
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
            placeholder={"Enter amount..."}
            value={record.amount}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
