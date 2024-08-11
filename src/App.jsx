import React, { Suspense, lazy } from "react";
// import './index.scss'

import ScrollToTop from "./Components/ScrollToTop";
import LoadingSpinner from "./Components/LoadingSpinner";

// import Homepage from './pages/Homepage';
// import WebDesign from './pages/WebDesign';
// import AppDesign from './pages/AppDesign';
// import GraphicDesign from './pages/GraphicDesign';
// import AboutPage from './pages/AboutPage';
// import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';
// import PageNotFound from './pages/PageNotFound';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./pages/Homepage"));
const WebDesign = lazy(() => import("./pages/WebDesign"));
const AppDesign = lazy(() => import("./pages/AppDesign"));
const GraphicDesign = lazy(() => import("./pages/GraphicDesign"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const LocationsPage = lazy(() => import("./pages/LocationsPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  // const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route index element={<Homepage />} />

          <Route path="webdesign" element={<WebDesign />} />
          <Route path="appdesign" element={<AppDesign />} />
          <Route path="graphicdesign" element={<GraphicDesign />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<PageNotFound />} />
          {/* <Route path="spinner" element={<LoadingSpinner />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
265778;
