import React from 'react';

function ExpenseItem({ name, description, category, amount, date, onDelete }) {
  return (
    <tr>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">{category}</td>
      <td className="border px-4 py-2">${amount}</td>
      <td className="border px-4 py-2">{date}</td>
      <td className="border px-4 py-2">
        <button
          onClick={onDelete}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;