import React from 'react';
import '../styles/videoPlayer.css';

class VideoPlayer extends React.Component {
  componentDidMount() {
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    this.setState({
      player: player,
      video: video,
      progress: progress,
      progressBar: progressBar,
      toggle: toggle
    });
  }

  togglePlay = () => {};
  updateButton = () => {};
  handleProgress = () => {};
  skip = () => {};
  handleRangeUpdate = () => {};
  scrub = () => {};

  render() {
    let mousedown = false;
    return (
      <div className="container">
        <div
          className="player"
          onClick={this.togglePlay}
          onPlay={this.updateButton}
          onPause={this.updateButton}
          onTimeUpdate={this.handleProgress}
        >
          <video className="player__video viewer" src="" />
          <div className="player__controls">
            <div
              className="progress"
              onClick={this.scrub}
              onMouseMove={mousedown && this.scrub}
              onMouseDown={(mousedown = true)}
              onMouseUp={(mousedown = false)}
            >
              <div className="progress__filled" />
            </div>
            <button
              className="player__button toggle"
              title="Toggle Play"
              onClick={this.togglePlay}
            >
              ►
            </button>
            <input
              type="range"
              name="volume"
              className="player__slider"
              min="0"
              max="1"
              step="0.05"
              value="1"
              onChange={this.handleRangeUpdate}
              onMouseMove={this.handleRangeUpdate}
            />
            <input
              type="range"
              name="playbackRate"
              className="player__slider"
              min="0.5"
              max="2"
              step="0.1"
              value="1"
              onChange={this.handleRangeUpdate}
              onMouseMove={this.handleRangeUpdate}
            />
            <button
              onClick={this.skip}
              data-skip="-10"
              className="player__button"
            >
              « '10s'
            </button>
            <button
              onClick={this.skip}
              data-skip="25"
              className="player__button"
            >
              '25s' »
            </button>
          </div>
        </div>;
      </div>
    );
  }
}

export default VideoPlayer;
