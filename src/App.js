import { ThemeProvider } from '@emotion/react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import theme from './theme';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <ButtonComponent/>
      <SearchComponent/>  
    </div>
    </ThemeProvider>
  );
}

export default App;
