import '../App.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  { name: "Anom", si: 19, area: "Male" },
  { name: "Megha", si: 19, area: "Female" }
]
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th style={{width:"10%"}}>SI. NO.</th>
          <th style={{width:"40%"}}>Name</th>
          <th style={{width:"50%"}}>Area</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.si}</td>
              <td>{val.name}</td>
              <td>{val.area}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}
  
export default App;

