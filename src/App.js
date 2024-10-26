import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense.js";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { useState } from "react";
function App() {
  const [obj, setobj] = useState({
    balance: 0,
    income: 0,
    expense: 0,
    history: [
      {
      }
    ],
  });
  function addRecord(item){
    console.log(item);
    setobj(...obj)
  }
  function deleRecard(id){

  }
  return (
    <div className="App">
      <Header />
      <div class="container">
        <Balance balance={obj.balance}/>
        <IncomeExpense income={obj.income} expense={obj.expense} />
        <TransactionList list={obj.history}/>
        <AddTransaction addFunction={addRecord}/>
      </div>
    </div>
  );
}

export default App;
