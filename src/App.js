import { useState } from 'react';
import './App.css';
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
    <div className="container p-4">
      <h1 className="text-2xl font-bold mb-2">Expense Tracker</h1>
      <p className="mb-4">Start taking control of your finances and life. Record, categorize and analyze your spending.</p>

      <form onSubmit={handleSubmit} className="flex items-end space-x-4 flex-wrap mb-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Expense Name"
            className="border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-semibold">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            className="border p-2 rounded"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-sm font-semibold">Category</label>
          <input
            id="category"
            type="text"
            placeholder="Category"
            className="border p-2 rounded"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-semibold">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Amount"
            className="border p-2 rounded"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-semibold">Date</label>
          <input
            id="date"
            type="date"
            className="border p-2 rounded"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      <table className="w-full border-collapse border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Amount ($)</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Actions</th>
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
  );
}

export default App;
