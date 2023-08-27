import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import mainPage from "./pages/mainPage";
import categoryPage from "./pages/categoryPage";
function App() {
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "100vh",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" Component={mainPage} />
        <Route path="/danh-muc" Component={mainPage} />
        <Route path="/san-pham" Component={categoryPage} />
      </Routes>
    </div>
  );
}

export default App;
