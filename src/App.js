import { useState } from 'react';
import './index.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prev) => [...prev, formData]);
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  const handleDelete = (indexToDelete) => {
    setExpenses((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">Expense Tracker</h1>
      <p className="mb-6 text-gray-600">
        Start taking control of your finances and life. Record, categorize and analyze your spending.
      </p>

      <form onSubmit={handleSubmit} className="form">
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input id="name" type="text" value={formData.name} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="description">Description</label>
    <input id="description" type="text" value={formData.description} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="category">Category</label>
    <input id="category" type="text" value={formData.category} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="amount">Amount</label>
    <input id="amount" type="number" value={formData.amount} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label htmlFor="date">Date</label>
    <input id="date" type="date" value={formData.date} onChange={handleChange} />
  </div>

  <button type="submit">Add</button>
</form>

<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount ($)</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          name={expense.name}
          description={expense.description}
          category={expense.category}
          amount={expense.amount}
          date={expense.date}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default App;
