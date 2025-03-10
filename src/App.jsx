import SideBar from "./Components/SideBar"
import Player from "./Components/Player"
import Display from "./Components/Display"
import { BrowserRouter as Router } from "react-router-dom"
import { useContext } from "react"
import { PlayerContext } from "./Contexts/PlayerContext"


function App() {
  const {audioRef,track} = useContext(PlayerContext)
  

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </div>
  )
}

export default App
