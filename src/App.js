import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./Home/Authentication";
import Home from "./Home/Home";
import PrivateRoute from "./Router/PrivateRouter";
import Dashboard from "./View/Dashboard";
import ManageLink from "./View/ManageLink";
import Profile from "./View/Profile";

const App = () => {
  return (
    <main>
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
        </Route>
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
