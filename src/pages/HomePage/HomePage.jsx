import React from 'react'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import { useOutletContext } from 'react-router-dom'
const HomePage = () => {
  const {data} = useOutletContext();
  const{topAlbums, newAlbums, songs} =data;
  return (
    <>
    <Hero/>
      <Section type='album' title='Top Albums' data={topAlbums}/>
     <Section type='album'title= 'New Albums' data={newAlbums}/>
     {/* <Section type='song'title= 'Songs' data={songs}/> */}
    </>
  )
}

export default HomePage