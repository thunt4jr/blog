import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { Routes, Route, Router } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register'>{user ? <Home /> : <Register />}</Route>
        <Route path='/login'>{user ? <Home /> : <Login />}</Route>
        <Route path='/write'>{user ? <Write /> : <Register />}</Route>
        <Route path='/settings'>{user ? <Settings /> : <Register />}</Route>
      </Routes>
    </Router>
  );
}

export default App;
