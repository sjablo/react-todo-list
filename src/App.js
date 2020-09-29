import React from 'react';

import List from "./List";
import tasks from "./tasks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TODO List
      </header>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
