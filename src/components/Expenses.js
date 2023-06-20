import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
	const expenses = props.expenses;
	const expenseItems= expenses.map(expense =>
		<ExpenseItem title={expense.title}
		             date={expense.date}
		             amount={expense.amount}
		/>
	)

	return (
		<div className="expenses">
			{expenseItems}
		</div>
	)
}

export default Expenses;