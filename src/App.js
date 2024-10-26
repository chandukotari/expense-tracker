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
        text: "",
        Amount: 0,
      },
    ],
  });
  
  return (
    <div className="App">
      <Header />
      <div class="container">
        <Balance />
        <IncomeExpense income={0.0} expense={0.0} />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
