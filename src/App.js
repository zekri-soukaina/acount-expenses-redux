import "./App.css";
import AddExpenses from "./components/AddExpenses";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <hr />
        <AddExpenses />
        <hr />
        <ExpensesList />

        <hr />
        <Payment />
      </header>
    </div>
  );
}

export default App;
