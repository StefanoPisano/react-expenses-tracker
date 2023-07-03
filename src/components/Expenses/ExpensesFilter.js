import {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const [year, setYear] = useState('');

	const yearChangeHandler = event =>  {
		const selectedYear = event.target.value;
		console.trace("ExpensesFilter.js yearChangeHandler", selectedYear);

		setYear(selectedYear);

		props.onSelectedYear(selectedYear);
	}

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select onChange={yearChangeHandler} value={props.selectedYear}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;