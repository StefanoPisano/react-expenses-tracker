import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const NO_VALUES_MESSAGE = "No available expenses for";

function ExpensesList({expenses, yearFilter}) {
	const filteredItems = expenses.filter(expense => expense.date.getFullYear() === parseInt(yearFilter));

	function getExpenseListComponent(expenses) {
		return expenses.map(expense =>
			<ul className="expenses-list">
				<ExpenseItem key={expense.id}
				             title={expense.title}
				             date={expense.date}
				             amount={expense.amount}
				/>
			</ul>
		)
	}

	const expenseItems = filteredItems.length
		? getExpenseListComponent(filteredItems) :
		<h2 className="expenses-list__fallback">{NO_VALUES_MESSAGE} {yearFilter}.</h2>

	return (
		<>
			{expenseItems}
		</>
	)
}

export default ExpensesList