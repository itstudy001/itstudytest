import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Testpage = React.lazy(() => import("pages/Testpage"));
const Signsuccesspage = React.lazy(() => import("pages/Signsuccesspage"));
const Signuppage = React.lazy(() => import("pages/Signuppage"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/signsuccesspage" element={<Signsuccesspage />} />
          <Route path="/testpage" element={<Testpage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
