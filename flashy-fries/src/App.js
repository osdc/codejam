import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./components/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Homepage {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            )}
          />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
