import React from "react";
import './App.css';
import Navigation from "./components/Navigation";
import Radio from "./components/Radio";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Radio />



      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
    </div>
  );
}

export default App;
