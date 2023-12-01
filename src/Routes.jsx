import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignupPageDark = React.lazy(() => import("pages/SignupPageDark"));
const SilverclubDark = React.lazy(() => import("pages/SilverclubDark"));
const LoginPageDark = React.lazy(() => import("pages/LoginPageDark"));
const FamilyHomeDarkButtom = React.lazy(
  () => import("pages/FamilyHomeDarkButtom"),
);
const FrontpageDark = React.lazy(() => import("pages/FrontpageDark"));
const Dark = React.lazy(() => import("pages/Dark"));
const FamilyHomeDark = React.lazy(() => import("pages/FamilyHomeDark"));
const SignupPageLight = React.lazy(() => import("pages/SignupPageLight"));
const SilverclubLight = React.lazy(() => import("pages/SilverclubLight"));
const FamilyHomeLightButtom = React.lazy(
  () => import("pages/FamilyHomeLightButtom"),
);
const FrontpageLight = React.lazy(() => import("pages/FrontpageLight"));
const Light = React.lazy(() => import("pages/Light"));
const FamilyHomeLight = React.lazy(() => import("pages/FamilyHomeLight"));
const LoginPageLight = React.lazy(() => import("pages/LoginPageLight"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPageLight />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/familyhomelight" element={<FamilyHomeLight />} />
          <Route path="/light" element={<Light />} />
          <Route path="/frontpagelight" element={<FrontpageLight />} />
          <Route
            path="/familyhomelightbuttom"
            element={<FamilyHomeLightButtom />}
          />
          <Route path="/silverclublight" element={<SilverclubLight />} />
          <Route path="/signuppagelight" element={<SignupPageLight />} />
          <Route path="/familyhomedark" element={<FamilyHomeDark />} />
          <Route path="/dark" element={<Dark />} />
          <Route path="/frontpagedark" element={<FrontpageDark />} />
          <Route
            path="/familyhomedarkbuttom"
            element={<FamilyHomeDarkButtom />}
          />
          <Route path="/loginpagedark" element={<LoginPageDark />} />
          <Route path="/silverclubdark" element={<SilverclubDark />} />
          <Route path="/signuppagedark" element={<SignupPageDark />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
