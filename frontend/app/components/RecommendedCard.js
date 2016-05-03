import React from 'react';

const RecommendedCard = React.createClass({
  getInitialState: function(){
    return{
      showingTrack: 0,
    }
  },
  render: function(){
    let tracks = this.props.tracks.tracks.map((track,index) => {
      return (
        <div key={index}>
          <div className="rec-img">
            <img src={track.albumArt} />
          </div>
          <p>{track.songTitle}</p>
          <p>{track.artistName.toString().replace(",",", ")}</p>
        </div>
      )
    });
    // console.log("tracks",tracks);
    let index = this.state.showingTrack;

    return(
      <div>
        {tracks[index]}
      </div>
    )
  }
});

export default RecommendedCard;