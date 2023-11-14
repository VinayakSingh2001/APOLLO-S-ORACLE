import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import Signup from "./pages/common/Signup";
import Dashboard from "./pages/common/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const [user,setUser] = useState({})

  useEffect(()=> {
    google.accounts.id.initialize({
      client_id:"",
      

    })
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
