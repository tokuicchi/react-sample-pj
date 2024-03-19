import React from "react";

// function App() {
//   const greeting = 'Hi';
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => alert(greeting)}></input>
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      Hi!
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  );
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
