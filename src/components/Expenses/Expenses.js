import {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
	const [yearFilter, setYearFilter] = useState("2022");

	const yearFilterHandler = selectedYear => {
		console.trace("Expenses.js yearFilterHandler", selectedYear);

		setYearFilter(selectedYear);
	}

	const filteredItems = props.expenses.filter(expense => expense.date.getFullYear() === parseInt(yearFilter));

	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={yearFilter} onSelectedYear={yearFilterHandler}/>
			<ExpensesChart expenses={filteredItems}></ExpensesChart>
			<ExpensesList expenses={filteredItems} yearFilter={yearFilter}/>
		</Card>

	)
}

export default Expenses;