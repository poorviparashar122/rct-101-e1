import React from "react";
import './'
import Counter from "./components/Counter/Counter";
import TaskApp from "./components/TaskApp";
function App() {
  return (
    <div className="App">
    <TaskApp/>
    <Counter/>
    </div>
  );
}

export default App;
