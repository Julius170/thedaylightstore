import "./App.scss";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
