import '../App.css';
  
// Example of a data array that
// you might receive from an API
const data = [
  { name: "Anomjdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"},
  { name: "Anom", si: 19, area: "Male" , iscm:"12/07/23" , date:"376"},
  { name: "Megha", si: 19, area: "Female", iscm:"12/07/23" , date:"376" },
  { name: "Subham", si: 25, area: "Male", iscm:"12/07/23" , date:"376"}
]
  
function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th style={{width:"10%"}}>SI. NO.</th>
          <th style={{width:"20%"}}>Name</th>
          <th style={{width:"50%"}}>Area</th>
          <th style={{width:"10%"}}>ISCM Date</th>
          <th style={{width:"10%"}}>Reg. Date</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.si}</td>
              <td>{val.name}</td>
              <td>{val.area}</td>
              <td>{val.iscm}</td>
              <td>{val.date}</td>
            </tr>
          )
        })}
      </table>
      {/* dynamic link lead to a pdf */}
      <h3>More About Incubates</h3>
    </div>
  );
}
  
export default App;

