import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";


function ExpensesList({expenses}) {
	function getExpenseListComponent(expenses) {
		return expenses.map(expense =>
			<ul key={expense.id} className="expenses-list">
				<ExpenseItem title={expense.title}
				             date={expense.date}
				             amount={expense.amount}
				/>
			</ul>
		)
	}

	const expenseItems = expenses.length
		? getExpenseListComponent(expenses) :
		<h2 className="expenses-list__fallback">No available expenses</h2>

	return (
		<>
			{expenseItems}
		</>
	)
}

export default ExpensesList