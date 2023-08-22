import logo from "./logo.svg";
import "./App.css";
import DynamicDropdwon from "./DynamicDropdwon";
import OptimizedDropdown from "./OptimizedDropdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DynamicDropdwon />
        <br />
        <OptimizedDropdown />
      </header>
    </div>
  );
}

export default App;
