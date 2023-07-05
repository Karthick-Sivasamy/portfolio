import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Services" element={<Home />} />
        <Route path="/Works" element={<Home />} />
        <Route path="/Contact" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
