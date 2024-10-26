import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense.js";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { useState } from "react";
function App() {
  const [obj, setObj] = useState({
    balance: 0,
    income: 0,
    expense: 0,
    history: [{}],
  });
  var history=[];
  function addRecord(item) {
    var expense = obj.expense;
    var income = obj.income;
    if (item.amount > 0) {
      income = income + item.amount;
    } else if (item.amount < 0) {
      expense = expense - item.amount;
    }
    //console.log(expense, income);
    setObj(prevState => ({
      ...prevState,balance:income-expense,income:income,expense:expense,
      history: [...prevState.history, item]
    }));
 
  }
  function deleRecard(id) {}
  return (
    <div className="App">
      <Header />
      <div class="container">
        <Balance balance={obj.balance} />
        <IncomeExpense income={obj.income} expense={obj.expense} />
        <TransactionList list={obj.history} />
        <AddTransaction addFunction={addRecord} />
      </div>
    </div>
  );
}

export default App;
