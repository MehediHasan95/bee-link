import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Home/About";
import Authentication from "./Home/Authentication";
import Contact from "./Home/Contact";
import Home from "./Home/Home";
import NotFound from "./Home/NotFound";
import PrivateRoute from "./Router/PrivateRouter";
import Dashboard from "./View/Dashboard";
import ManageLink from "./View/ManageLink";
import Notes from "./View/Notes";
import Profile from "./View/Profile";

const App = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="add" element={<ManageLink />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notes" element={<Notes />} />
        </Route>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
