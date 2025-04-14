import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finaces and files. Record, categorize and analyze your spending </p>
      <form>
        <label htmlFor="Enter expense name"></label>
        <input type="text" placeholder= "Expense Name" />

        <label htmlFor="Enter expense description"></label>
        <input type="text" placeholder= "Expense Name" />

        <label htmlFor="Enter expense category"></label>
        <input type="text" placeholder= "Expense Name" />

        <label htmlFor="enter amount"></label>
        <input type="text" placeholder= "Expense Name" />

        <label htmlFor="mm/dd/yy"></label>
        <input type="text" placeholder= "Expense Name" />

      </form>
      
    </div>
  );
}

export default App;
