import "./App.css";
import DataConsumerChild from "./renderProp/DataConsumerChild";
import AnotherConsumerChild from "./renderProp/AnotherConsumerChild";

function App() {
  return (
    <div className="App">
      <header>
        <DataConsumerChild />
        <AnotherConsumerChild />
      </header>
    </div>
  );
}

export default App;
