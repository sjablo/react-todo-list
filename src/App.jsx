import React, { useState } from "react";

import { List, Header, Modal } from "./components";

const App = () => {
  const [isModalOpen, toggleModalOpen] = useState(false);

  return (
    <div className="App">
      <Header text={"TODO List"} />
      <List openModal={toggleModalOpen} />
      {isModalOpen && <Modal onClose={() => toggleModalOpen(false)} />}
    </div>
  );
};

export default App;
