import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
	const [expenses, setExpenses] = useState([]);

	const newExpenseHandler = (expense) => {
		console.trace("App.js", expense);

		setExpenses(prevState => [...prevState, expense])
	}


	return (
		<div>
			<NewExpense onNewExpense={newExpenseHandler}/>

			<Expenses expenses={expenses}/>
		</div>
	);
}

export default App;
