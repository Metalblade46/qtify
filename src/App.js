import { ThemeProvider } from '@emotion/react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <ButtonComponent/>
    </div>
    </ThemeProvider>
  );
}

export default App;
