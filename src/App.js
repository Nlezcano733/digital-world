import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Routes/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/data" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
