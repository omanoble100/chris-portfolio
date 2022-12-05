
import './App.css';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import WhatsGood from './components/WhatsGood';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <WhatsGood />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
