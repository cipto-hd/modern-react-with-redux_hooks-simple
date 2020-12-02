import { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [activeResource, setResource] = useState("posts");

  const setActiveButton = (resource) => ({
    backgroundColor: resource === activeResource ? "#24a0ed" : "",
  });

  return (
    <div>
      <UserList />
      <div>
        <button
          onClick={() => setResource("posts")}
          style={setActiveButton("posts")}
        >
          Posts
        </button>
        <button
          onClick={() => setResource("todos")}
          style={setActiveButton("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={activeResource} />
    </div>
  );
};

export default App;
