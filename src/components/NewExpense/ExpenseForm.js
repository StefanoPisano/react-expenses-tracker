import {useState} from "react";
import './ExpenseForm.css'

const DEFAULT_STATE = {
	title: '',
	amount: '',
	date: ''
};

function ExpenseForm(props) {
	const [form, setForm] = useState(DEFAULT_STATE);

	const titleChangeHandler = (event) => {
		setForm((prevState) => {
			return {...prevState, title: event.target.value}
		})
	}

	const amountChangeHandler = (event) => {
		setForm(prevState => {
			return {...prevState, amount: event.target.value}
		})
	}

	const dateChangeHandler = (event) => {
		setForm((prevState) => {
			return {
				...prevState, date: event.target.value
			}
		})
	}

	function validateForm(form){
		if(!form.title || !form.title.length){
			return false;
		}

		if(isNaN(form.amount)) {
			return false;
		}

		return true;
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const isValid = validateForm(form);

		if(!isValid) {
			return;
		}

		props.onSaveExpense({
			title: form.title,
			amount: +form.amount,
			date: new Date(form.date)
		})

		setForm(DEFAULT_STATE);
	}

	function cancelButtonHandler(event){
		event.preventDefault();

		props.onCancelNewExpense();

		setForm(DEFAULT_STATE);
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={form.title} onChange={titleChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={form.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" value={form.date} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={cancelButtonHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm