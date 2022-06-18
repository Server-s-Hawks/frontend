import './view.css';
// Example of a data array that
// you might receive from an API
const data = [
{ User_ID: "U001", Basic: 19000, Allowance: 5000,Deduction:5000 },

]

function TableData() {
return (
	<div className="App">
	<table>
		<tr>
		<th>User_ID</th>
		<th>Basic Salary</th>
		<th>Allowances</th>
    <th>Deduction</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.User_ID}</td>
			<td>{val.Basic}</td>
			<td>{val.Allowance}</td>
      <td>{val.Deduction}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default TableData;


