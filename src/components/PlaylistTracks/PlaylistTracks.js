import React from "react";
import "./PlaylistTracks.css";

class PlaylistTracks extends React.Component {
  render() {
    return (
      <div className="PlaylistTracks">
        <input defaultValue="Playlist Tracks" />
        {this.props.selectedPlaylistTracks.map((item) => (
          <p>{item.track.name}</p>
        ))}
      </div>
    );
  }
}

export default PlaylistTracks;
