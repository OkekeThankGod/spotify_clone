import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets/assets';
import { PlayerContext } from '../Contexts/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();

    // Ensure id is correctly parsed (use parseInt if albumsData is an array)
    const albumData = albumsData[id] || null; 
    const {playWithId} = useContext(PlayerContext);

    if (!albumData) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold text-red-500">Album Not Found</h2>
                <p className="text-gray-400">The album you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <>
            <NavBar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img src={albumData.image} alt={albumData.name} className='w-48 rounded'/>
                <div className='flex flex-col'>
                    <p className='text-green-600'>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-2'>
                        <img src={assets.spotify_logo} alt="Spotify Logo" className='inline-block w-5' />
                        <b>Spotify</b> · 83,455,398 likes · <b>50 Songs,</b> about 3 hour 30 min
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a8a8a8]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img src={assets.clock_icon} alt="Clock Icon" className='m-auto w-4' />
            </div>
            <hr />

            {/* Render Songs */}
            {songsData.length > 0 ? (
                songsData.map((song, index) => (
                    <div onClick={()=>playWithId(song.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a8a8a8] hover:bg-[#ffffff2b] cursor-pointer" >
                        <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img src={song.image} className='inline w-10 mr-5 rounded hover:bg-amber-100 cursor-crosshair' />
                        {song.name}
                        </p>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>2 days ago</p>
                        <p className='text-[15px] text-center'>{song.duration}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-400 mt-5">No songs available</p>
            )}
        </>
    );
}

export default DisplayAlbum;
