import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const yearChangeHandler = event =>  {
		const selectedYear = event.target.value;
		console.trace("ExpensesFilter.js yearChangeHandler", selectedYear);

		props.onSelectedYear(selectedYear);
	}

	const options = props.options.map(option => <option key={option} value={option}>{option}</option>)
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select onChange={yearChangeHandler} value={props.selectedYear}>
					{options}
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;