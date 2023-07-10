import excelDownload from "./libs/excel-download";
import "./App.css";

function App() {
  const thead = ["Country", "Code", "Capital"];
  const tableData = [
    {
      Country: "Korea",
      Code: "+82",
      Capital: "Seoul"
    },
    {
      Country: "United States",
      Code: "+1",
      Capital: "Washington, D.C."
    },
    {
      Country: "France",
      Code: "+33",
      Capital: "Paris"
    }
  ];
  const handleExcel = () => {
    excelDownload({
      thead,
      tableData,
      sheetName: "테스트테이블",
      fileName: "테스트테이블.xlsx"
    });
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            {thead.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.Country}</td>
              <td>{row.Code}</td>
              <td>{row.Capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleExcel}>excel download</button>
    </>
  );
}

export default App;
