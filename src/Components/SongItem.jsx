import React, { useContext } from "react";
import PropTypes from "prop-types"; // Add PropTypes for prop types validation
import { PlayerContext } from "../Contexts/PlayerContext";

const SongItem = ({ name,image,desc,id}) => {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() =>playWithId(id)} className="min-w-[180px] p-2 px-3 cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} className="rounded" alt={name} /> 
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

// SongItem.propTypes = {
//   song: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     desc: PropTypes.string
//   }).isRequired,
//   id: PropTypes.string.isRequired
// };

export default SongItem;
