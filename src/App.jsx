import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Player from "./pages/Player";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                {" "}
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/player/:id"
            element={
              <ProtectedRoute>
                <Player />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
