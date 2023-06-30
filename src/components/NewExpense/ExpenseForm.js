import {useState} from "react";
import './ExpenseForm.css'


function ExpenseForm() {
	const [form, setForm] = useState({
		title: '',
		amount: '',
		date: ''
	});

	const titleChangeHandler = (event) => {
		setForm({...form, title: event.target.input})
	}

	const amountChangeHandler = (event) => {
		setForm({...form, amount: event.target.input})
	}

	const dateChangeHandler = (event) => {
		setForm({...form, date: event.target.input})
	}

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm