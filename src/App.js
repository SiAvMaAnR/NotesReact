import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as MyRouter, Routes, Route } from "react-router-dom";
import { Home, Tasks, About } from "../src/pages/Index";
import './App.css';
import { useState } from "react";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isOnline, setOnline] = useState(true);
  return (
    <div >
      <MyRouter>

        <div>
          <Sidebar
            surname={'Samarkin'}
            firstname={'Ivan'}
            status={isOnline ? 'Online' : 'Offline'}
            isAuthorized={isAuthorized}
            setIsAuthorized={setIsAuthorized}>

            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks isAuthorized={isAuthorized} />} />
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
