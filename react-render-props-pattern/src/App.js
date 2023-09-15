import "./App.css";
import DataConsumerChild from "./renderProp/DataConsumerChild";
import AnotherConsumerChild from "./renderProp/AnotherConsumerChild";
import ParentLayout from "./componentRenderProps/ParentLayout";

function App() {
  return (
    <div className="App">
      <header>
        <DataConsumerChild />
        <AnotherConsumerChild />
        <h1>Render Props Good Example</h1>
        <ParentLayout />
      </header>
    </div>
  );
}

export default App;
