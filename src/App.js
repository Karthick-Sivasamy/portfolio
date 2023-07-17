import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CustomHeader from './components/CustomHeader';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Home />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
