import React from 'react'
import { useParams } from 'react-router-dom'

const AlbumPage = () => {
  const params = useParams();
  return (
    <div>{params.albumId}</div>
  )
}

export default AlbumPage