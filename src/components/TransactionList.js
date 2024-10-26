import React from 'react'
function Income(){
  return <div><li className="plus">
  Cash <span>-$400</span><button className="delete-btn">x</button>
</li></div>;
}
function Expense(){
  return <div><li className="plus">
  Cash <span>-$400</span><button className="delete-btn">x</button>
</li></div>;
}
function TransactionList(props){
  return (
    <div><h3>History</h3>
    <ul className="list">
      <li className="minus">
     Cash <span>-$400</span><button className="delete-btn">x</button>
   </li>
   </ul></div>
  )
}

export default TransactionList