import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {

    render() {
      return (
          <div className="Playlist">
              <input value={'New Playlist'}/>
              {/*<TrackList />*/}
              <button className="Playlist-save">SAVE TO SPOTIFY</button>
          </div>
      );
    }
}

export default PlayList;