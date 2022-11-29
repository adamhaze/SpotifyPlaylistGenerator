import * as React from "react";
import "./DropdownList.css";

export default function DropdownList(props) {
    return (
        <div className="dropdown">
            {props.suggestedSongs.map((song) => (
                <div className="dropdown-row" onClick={() => props.addSong(song)} key={song.id}> {song.name} by {song.artist} </div>
            ))}
        </div>
    )
}