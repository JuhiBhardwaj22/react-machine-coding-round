import "./App.css";
import MyComponent from "./component/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent msgFromParent="Passing props from parent" />
      </header>
    </div>
  );
}

export default App;
