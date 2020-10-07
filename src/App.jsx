import React from "react";

import { Header } from "components";
import { List } from "views";

const App = () => (
  <div className="App">
    <Header text={"TODO List"} />
    <List />
  </div>
);

export default App;
