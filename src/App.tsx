import "bootstrap/dist/css/bootstrap.css";
// import HomePage from "./pages/HomePage";
import { Outlet } from "react-router"
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;