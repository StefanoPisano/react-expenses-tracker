import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

function NewExpense(props) {
	const [showForm, setShowForm] = useState(false);
	const saveExpenseHandler = (savedExpense) => {
		console.trace("NewExpense.js", savedExpense);

		const expense = {
			id: `u${crypto.randomUUID()}`,
			...savedExpense
		}

		props.onNewExpense(expense);

		setShowForm(false);
	}

	function newExpenseButtonHandler() {
		setShowForm(true);
	}

	function cancelNewExpenseHandler() {
		setShowForm(false);
	}

	function toggleForm() {
		return showForm
			? <ExpenseForm onSaveExpense={saveExpenseHandler} onCancelNewExpense={cancelNewExpenseHandler}/>
			: <div className="new-expense__actions">
				<button onClick={newExpenseButtonHandler}>New Expense</button>
			</div>
	}

	const content = toggleForm();

	return (
		<div className="new-expense">
			{content}
		</div>
	)
}

export default NewExpense