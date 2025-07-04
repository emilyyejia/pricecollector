import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Create from "./components/create";
import Edit from "./components/edit";
import Delete from "./components/delete";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  const myWidth = 220;
  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        content = {
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/delete/:id" element={<Delete/>} />
          </Routes>
        }
      />
    </div>
  );
};

export default App;
