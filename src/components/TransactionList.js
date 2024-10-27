import React from "react";
function TransactionList(props) {
  function deleteRecord(id) {
    props.deleteFunction(id);
  }
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {props.list.map((item, index) => {
          if (item.amount < 0)
            return (
              <li className="minus">
                {item.text} <span>{item.amount}</span>
                <button
                  className="delete-btn"
                  onClick={() => {
                    deleteRecord(index);
                  }}
                >
                  x
                </button>
              </li>
            );
          else if (item.amount > 0)
            return (
              <li className="plus">
                {item.text} <span>+{item.amount}</span>
                <button
                  className="delete-btn"
                  onClick={() => {
                    deleteRecord(index);
                  }}
                >
                  x
                </button>
              </li>
            );
        })}
      </ul>
    </div>
  );
}

export default TransactionList;
