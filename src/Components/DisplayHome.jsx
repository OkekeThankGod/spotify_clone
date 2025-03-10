import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets/assets'
import { AlbumItem } from './AlbumItem'
import SongItem from './SongItem'


function DisplayHome() {
  return (
    <>
    <NavBar />
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
      <div className='flex overflow-auto'>
      {albumsData.map((item,id) =>(
        <AlbumItem key={id} name={item.name} desc={item.desc} id={item.id}  image={item.image} />))}
      </div>
    </div>

    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
      <div className='flex overflow-auto'>
      {songsData.map((song,id) =>(
        <SongItem  key={id} name={song.name} desc={song.desc} image={song.image} id={id}/>
      ))}
      </div>
    </div>
        </>
  )
}

export default DisplayHome

