import {useState} from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
	const filterValues = [...new Set(props.expenses.map(expense => expense.date.getFullYear()))];

	const [yearFilter, setYearFilter] = useState(filterValues[0] || -1);

	if(yearFilter === -1 && filterValues.length){
		setYearFilter(filterValues[0]);
	}

	const yearFilterHandler = selectedYear => {
		console.trace("Expenses.js yearFilterHandler", selectedYear);

		setYearFilter(selectedYear);
	}

	const filteredItems = props.expenses.filter(expense => expense.date.getFullYear() === parseInt(yearFilter));
	return (
		<Card className="expenses">
			<ExpensesFilter options={filterValues} selectedYear={yearFilter} onSelectedYear={yearFilterHandler}/>
			<ExpensesChart expenses={filteredItems}></ExpensesChart>
			<ExpensesList expenses={filteredItems}/>
		</Card>

	)
}

export default Expenses;