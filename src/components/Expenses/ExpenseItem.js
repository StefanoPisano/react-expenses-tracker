import './ExpenseItem.css'
import './ExpenseDate';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

function ExpenseItem({date, title, amount}) {
	const [titleToDisplay, setTitle] = useState(title);

	function clickHandler() {
		setTitle("updated!")
	}

	return (
		<Card className="expense-item">
			<ExpenseDate date={date}/>
			<div className="expense-item__description">
				<h2>{titleToDisplay}</h2>
				<div className="expense-item__price">€ {amount}</div>
				<button onClick={clickHandler}>Change Title</button>
			</div>
		</Card>
	)
}


export default ExpenseItem