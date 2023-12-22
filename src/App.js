import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import Section from './components/Section/Section';


function App() {
  return (
    <div className="App">
      <Navbar searchdata={""}/>
      <Hero/>
     <Section type='new'/>
    </div>
  );
}

export default App;
