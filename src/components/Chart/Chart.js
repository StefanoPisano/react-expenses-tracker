import './Chart.css'
import ChartBar from "./ChartBar";

function Chart({dataPoints}){
	const maxValue = Math.max(...dataPoints.map(v => v.value));
	const charts = dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label}/>)

	return (
		<div className="chart">
			{charts}
		</div>
	)
}

export default Chart