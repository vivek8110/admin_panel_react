import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Menu from './Component/Menu';
import Dashboard from './Component/Dashboard';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
