function ExpenseItem({ name, description, category, amount, date, onDelete }) {
  return (
    <tr>
      <td className="px-4 py-2 border">{name}</td>
      <td className="px-4 py-2 border">{description}</td>
      <td className="px-4 py-2 border">{category}</td>
      <td className="px-4 py-2 border">${parseFloat(amount).toFixed(2)}</td>
      <td className="px-4 py-2 border">{date}</td>
      <td className="px-4 py-2 border">
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ExpenseItem;
