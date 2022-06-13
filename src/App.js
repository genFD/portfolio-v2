import { Routes, Route } from 'react-router-dom';
import { Home, Opener, Portfolio, Contact, ProjectDetail } from './pages';

function App() {
  return (
    <div className="font-jost">
      <Routes>
        <Route path="/" element={<Opener />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
