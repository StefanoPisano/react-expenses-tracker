import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
	const saveExpenseHandler = (savedExpense) => {
		console.trace("NewExpense.js", savedExpense);

		const expense = {
			id: `u${Math.random()}`,
			...savedExpense
		}


		props.onNewExpense(expense);
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpense={saveExpenseHandler}/>
		</div>
	)
}

export default NewExpense