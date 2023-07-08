import {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


function Expenses(props) {
	const [yearFilter, setYearFilter] = useState("2022");

	const yearFilterHandler = selectedYear => {
		console.trace("Expenses.js yearFilterHandler", selectedYear);

		setYearFilter(selectedYear);
	}

	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={yearFilter} onSelectedYear={yearFilterHandler}/>

			<ExpensesList expenses={props.expenses} yearFilter={yearFilter}/>
		</Card>

	)
}

export default Expenses;