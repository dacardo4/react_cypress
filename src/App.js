import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes,useRoutes  } from "react-router-dom";
// Routes
import publicRoutesList from "./routes/publicRoutes";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/login";
import Register from "./pages/register";

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Register /> },
    { path: "login", element: <Login /> }
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

function AppOld() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
