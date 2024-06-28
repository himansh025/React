import "./App.css";
import Data from "./component/Data";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Productcomp from "./routercomp/Productcomp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data/>} />
        <Route path="/single_product/:id" element={<Productcomp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
