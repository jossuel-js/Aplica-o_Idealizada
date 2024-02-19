
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ok" element={<Home />} />
        {/* Adicione outras rotas aqui conforme necessário */}
      </Routes>
      <Footer/>
    </Router>
  </div>
);
}


export default App;
