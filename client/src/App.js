import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Journal from "./pages/Journal";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
