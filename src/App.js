import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchGenres, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api'

function App() {
  const [searchdata,setSearchData] = useState();
  const [data, setData] = useState({})
  const generateData= (key,source)=>{
    source().then(data=>{
      setData(prevData=>{
        return {...prevData, [key] : data}
      })
    })
  }
  useEffect(()=>{
    generateData('topAlbums',fetchTopAlbums);
    generateData('newAlbums',fetchNewAlbums);
    generateData('songs',fetchSongs);
    generateData('genres',fetchGenres);
  },[])
  const {topAlbums=[], newAlbums=[], songs=[]} = data;
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Navbar searchdata={[...topAlbums,...newAlbums]}/>
        <Outlet context={{data: {topAlbums,newAlbums,songs}}}/>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
