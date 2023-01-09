import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
