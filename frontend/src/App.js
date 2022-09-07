import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Profile from "./components/accounts/Profile";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import ChatLayout from "./components/layouts/ChatLayout";
import Header from "./components/layouts/Header";
import ErrorMessage from "./components/layouts/ErrorMessage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <WithPrivateRoute>
                <ChatLayout />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
