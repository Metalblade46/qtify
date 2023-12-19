import './App.css';
import ButtonComponent from './components/Button/ButtonComponent';
import SearchComponent from './components/Search/SearchComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent>Give feedback</ButtonComponent>
      <SearchComponent placeholder='Search for your favourite song'/>  
    </div>
  );
}

export default App;
