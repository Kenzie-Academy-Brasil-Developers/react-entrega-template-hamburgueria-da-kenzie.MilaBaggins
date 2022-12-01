import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart/CartProduct";

function App() {
  const [filterName, setFilterName] = useState("");
  return (
    <div className="App">
      <Header setFilterName={setFilterName} />
      <div className="divMain">
        <Cart filterName={filterName} />
      </div>
    </div>
  );
}
export default App;
