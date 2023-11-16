import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/common/Home";
import Login from "./pages/common/Login";
import Signup from "./pages/common/Signup";
import Dashboard from "./pages/common/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Exams from "./pages/admin/Exams";
import AddEditExams from "./pages/admin/AddEditExams";
import Buffer from "./components/Buffer";
import { useSelector } from "react-redux";

function App() {
  const {loading} = useSelector(state => state.loader)

  return (
    <>
    {loading && <Buffer />}
    
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

          <Route
            path="/admin/exams"
            element={
              <ProtectedRoute>
                <Exams />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/exams/add"
            element={
              <ProtectedRoute>
                <AddEditExams />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/exams/edit/:id"
            element={
              <ProtectedRoute>
                <AddEditExams />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
