import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import { AuthContext } from "./context/AuthContext";
import "./App.css"

function App() {
  const { user, loading } = useContext(AuthContext);
  console.log(user)
  if (loading) return <p>Loading...</p>;

  return (
    		<div className='p-4 h-screen flex items-center justify-center'>

    <Routes>
      {/* Public routes */}
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" replace />}
      />

      <Route
        path="/signup"
        element={!user ? <SignUp /> : <Navigate to="/" replace />}
      />

      {/* Protected route */}
      <Route
        path="/"
        element={user ? <Home /> : <Navigate to="/login" replace />}
      />

      {/* Catch all */}
      <Route
        path="*"
        element={<Navigate to={user ? "/" : "/login"} replace />}
      />
    </Routes>
    </div>
  );
}

export default App;
