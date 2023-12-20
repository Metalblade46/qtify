import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar searchdata={""}/>
      <Hero/>
    </div>
  );
}

export default App;
