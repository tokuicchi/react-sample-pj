import React from "react";

function App() {
  const greeting = 'Hi';
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => alert(greeting)}></input>
    </React.Fragment>
  );
}

export default App;
