import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import "./App.css";

// Lazy-loaded pages for code splitting
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Attractions = lazy(() => import("./pages/Attractions/Attractions"));
const Food = lazy(() => import("./pages/Food/Food"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

const PageLoader = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <LoadingSpinner message="Loading page..." />
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/attractions" element={<Attractions />} />
              <Route path="/food" element={<Food />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <div style={{
                    minHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    textAlign: "center",
                    padding: "2rem",
                    paddingTop: "6rem"
                  }}>
                    <div style={{ fontSize: "5rem" }}>⚜</div>
                    <h2 style={{ fontFamily: "Georgia, serif", color: "#1a0a0a", fontSize: "2rem", margin: 0 }}>
                      Page Not Found
                    </h2>
                    <p style={{ color: "#666", margin: 0 }}>
                      Looks like you've wandered off the beaten path in Lucknow!
                    </p>
                    <a
                      href="/"
                      style={{
                        background: "#c0392b",
                        color: "#fff",
                        padding: "0.8rem 2rem",
                        borderRadius: "25px",
                        textDecoration: "none",
                        fontWeight: 600
                      }}
                    >
                      Back to Home
                    </a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
