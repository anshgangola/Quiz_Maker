import React from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { DataProvider } from "./context/dataContext";

function App() {
  return (
    <DataProvider>
      {/* This will route to Welcome Page */}
      <Start />

      {/*This will route to Quiz Page */}
      <Quiz />

      {/*This will route to Result Page */}
      <Result />
    </DataProvider>
  );
}

export default App;
