import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as MyRouter, Routes, Route } from "react-router-dom";
import { Home, Tasks, About } from "../src/pages/Index";
import './App.css';

function App() {
  return (
    <div >
      <MyRouter>

        <div>
          <Sidebar >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/about" element={<About />} />

              <Route path="/*" element={<Home />} />
            </Routes>
          </Sidebar>
        </div>

      </MyRouter>
    </div>
  );
}

export default App;
