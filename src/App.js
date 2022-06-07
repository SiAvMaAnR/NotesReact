import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom"
import { Login, Register, Home, Notes, Test } from "../src/pages/Index";
import { useEffect, useMemo, useState, createContext } from "react";
import './App.css';
import { useToken, useAuth, useUser } from "./hooks/index";

const TokenContext = createContext();
const AuthContext = createContext();
const UserContext = createContext();

function App() {
  const [token, setToken] = useToken();
  const [isLogged, login, logout] = useAuth([token, setToken]);
  const [user] = useUser([token, isLogged, logout]);

  const isEmptyUser = () => {
    return Object.keys(user).length === 0;
  }

  return (
    <TokenContext.Provider value={[token, setToken]}>
      <AuthContext.Provider value={[isLogged, login, logout]}>
        <UserContext.Provider value={[user]}>
          <BrowserRouter>
            <div>
              {(isLogged) ?
                <Sidebar
                  login={!isEmptyUser() ? user['login'] : ''}
                  role={!isEmptyUser() ? user['role'] : ''}
                  isLogged={isLogged}>

                  <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route exact path="/Notes" element={<Notes />} />
                    <Route exact path="/Test" element={<Test />} />
                    <Route path="/*" element={<Home />} />
                  </Routes>
                </Sidebar>
                :
                <Routes>
                  <Route path="/Register" element={<Register />} />
                  <Route path="/*" element={<Login />} />
                </Routes>
              }
 
            </div>
          </BrowserRouter>
        </UserContext.Provider>
      </AuthContext.Provider>
    </TokenContext.Provider >
  );
}

export { TokenContext, AuthContext, UserContext };
export default App;
