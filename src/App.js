import { Routes, Route } from 'react-router-dom';
import { Footer } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="font-jost">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Opener />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
