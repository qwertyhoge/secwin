import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import WebDev from "./pages/WebDev";
import ToolsDev from './pages/ToolsDev';
import XRDev from './pages/XRDev';
import FadeWrapper from './components/FadeWrapper'

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="skills/webdev" element={<WebDev />} />
          <Route path="skills/toolsdev" element={<ToolsDev />} />
          <Route path="skills/xrdev" element={<XRDev />} />
        </Route>
      </Routes>
);
}

export default App;
