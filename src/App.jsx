import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PoidsIdeal from './pages/PoidsIdeal';
import Livres from './pages/Livres';
import Covid from './pages/Covid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/poids" element={<PoidsIdeal />} />
        <Route path="/livres" element={<Livres />} />
        <Route path="/covid" element={<Covid />} />
      </Routes>
    </div>
  );
}

export default App;
