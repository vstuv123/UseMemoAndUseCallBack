import { useState, useMemo, useCallback } from "react";
import { initialItems } from "./Components/InitialItems";
import "./App.css";
import Search from "./Components/Search";

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);
  const selectedItems = useMemo(
    () => items.find((item) => item.id === count),
    [items, count]
  );
  const allUsers = ["john", "alex", "jorge", "peter", "perry"];
  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text) => {
    console.log(users[0])
    const filteredUsers = users.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, [users]);

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <h1>Selected Item: {selectedItems?.id}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <div>
          <button onClick={() => setUsers(allUsers)}>Shuffle</button>
          <Search handleSearch={handleSearch} />
        </div>
        <ul>
          {
            users.map((user, index) => (
              <li key={index}>{user}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default App;
