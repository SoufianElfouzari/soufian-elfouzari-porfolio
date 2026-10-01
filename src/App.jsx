import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./pages/common/components/Header/Header";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/ProjectDetails/ProjectDetails";
import "./App.css";
import Leistungen from "./pages/Leistungen/Leistungen";
import AboutMe from "./pages/AboutMe/AboutMe";
import Lebenslauf from "./pages/Lebenslauf/Lebenslauf";
import Kontakt from "./pages/Kontakt/Kontakt";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/projekte" element={<Projects />} />
        <Route path="/ueber-mich" element={<AboutMe />} />
        <Route path="/lebenslauf" element={<Lebenslauf />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route
          path="/projekte/:projectSlug"
          element={<ProjectDetail />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;