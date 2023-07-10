import "./App.css";

function App() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Code</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Korea</td>
            <td>+82</td>
            <td>Seoul</td>
          </tr>
          <tr>
            <td>United States</td>
            <td>+1</td>
            <td>Washington, D.C.</td>
          </tr>
          <tr>
            <td>France</td>
            <td>+33</td>
            <td>Paris</td>
          </tr>
        </tbody>
      </table>
      <button>excel download</button>
    </>
  );
}

export default App;
