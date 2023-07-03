import {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
	const [yearFilter, setYearFilter] = useState("2022");

	const expenseItems = props.expenses.map(expense =>
		<ExpenseItem title={expense.title}
		             date={expense.date}
		             amount={expense.amount}
		/>
	)

	const yearFilterHandler = selectedYear => {
		console.trace("Expenses.js yearFilterHandler", selectedYear);

		setYearFilter(selectedYear);
	}

	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={yearFilter} onSelectedYear={yearFilterHandler}/>

			{expenseItems}
		</Card>

	)
}

export default Expenses;