import React from "react";

import { List, Header } from "./components";

const App = () => (
  <div className="App">
    <Header text={"TODO List"} />
    <List />
  </div>
);

export default App;
