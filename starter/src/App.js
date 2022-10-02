import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "components/Home/Home";
import Search from "components/Search/Search";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
