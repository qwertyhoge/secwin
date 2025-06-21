import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import WebDev from "./pages/WebDev";
import ToolsDev from './pages/ToolsDev';
import XRDev from './pages/XRDev';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works" element={<Works />} />
          <Route path="works/webdev" element={<WebDev />} />
          <Route path="works/toolsdev" element={<ToolsDev />} />
          <Route path="works/xrdev" element={<XRDev />} />
        </Route>
      </Routes>
);
}

export default App;
