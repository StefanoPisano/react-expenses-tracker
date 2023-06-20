import './Expenses.css';
import Card from "../UI/Card";
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
		<Card className="expenses">
			{expenseItems}
		</Card>
	)
}

export default Expenses;