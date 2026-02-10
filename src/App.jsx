import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CSR from "./pages/CSR";
import Blockchain from "./pages/Blockchain";
import Marketplace from "./pages/Marketplace";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
