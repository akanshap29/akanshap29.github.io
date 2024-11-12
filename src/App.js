import Kanban from "./Components/Kanban";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json)
        setData(json)
  });
  }, []);

  return (
    <div className="App">
        {data.tickets && data.users && <Kanban tickets={data.tickets} users={data.users} />}
    </div>
  );
}

export default App;

