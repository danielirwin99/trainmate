import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Register from "./pages/Register";
import Journal from "./pages/Journal";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Chest from "./pages/Days/Chest";
import Legs from "./pages/Days/Legs";
import Back from "./pages/Days/Back";
import Fbw from "./pages/Days/Fbw";
import Cardio from "./pages/Days/Cardio";
import Arms from "./pages/Days/Arms";

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
          <Route path="journal" element={<Journal />}>
            <Route path="chest" element={<Chest />} />
            <Route path="legs" element={<Legs />} />
            <Route path="back" element={<Back />} />
            <Route path="full-body-workout" element={<Fbw />} />
            <Route path="cardio" element={<Cardio />} />
            <Route path="arms" element={<Arms />} />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Error />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
