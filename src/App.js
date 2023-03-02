import logo from "./logo.svg";
import "./App.css";
import { users } from "./data/usersArray";
import Counter from "./pages/counter";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        flexDirection: "column",
      }}
    >
      <h1>List of Users</h1>
      <ol>
        {users.map((obj) => (
          <li style={{ marginBottom: 5 }} key={obj.id}>
            {obj.name} is {obj.age} years old and lives in {obj.address.city}{" "}
            {obj.address.country}
          </li>
        ))}
      </ol>
      <Counter />
    </div>
  );
}

export default App;
