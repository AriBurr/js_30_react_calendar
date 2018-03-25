import React from 'react';
import '../styles/videoPlayer.css';
import { Icon, Button } from 'semantic-ui-react';

class VideoPlayer extends React.Component {
  state = { mousedown: false, paused: true };

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

  togglePlay = () => {
    const { video } = this.state;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  };

  updateButton = e => {
    const { paused } = this.state;
    this.setState({ paused: !paused });
  };

  skip = e => {
    const { video } = this.state;
    video.currentTime += parseFloat(e.target.dataset.skip);
  };

  handleRangeUpdate = e => {
    const { video } = this.state;
    video[e.target.name] = e.target.value;
  };

  handleProgress = () => {
    const { progressBar, video } = this.state;
    const percent = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${percent}%`;
  };

  scrub = e => {
    const { progress, video } = this.state;
    const scrubTime = e.clientX / progress.offsetWidth * video.duration;
    video.currentTime = scrubTime;
  };

  renderPlayButton = () => {
    const { paused } = this.state;
    return (
      <Button
        className="player__button toggle"
        onClick={() => this.togglePlay()}
      >
        <Icon name={paused ? 'play' : 'pause'} />
      </Button>
    );
  };

  handleMouseMove = e => this.state.mousedown && this.scrub(e);
  handleMouseDown = () => this.setState({ mousedown: true });
  handleMouseUp = () => this.setState({ mousedown: false });

  render() {
    return (
      <div className="container">
        <div className="player">
          <video
            onClick={this.togglePlay}
            onPlay={this.updateButton}
            onPause={this.updateButton}
            onTimeUpdate={this.handleProgress}
            className="player__video viewer"
            src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
          />
          <div className="player__controls">
            <div
              className="progress"
              onClick={this.scrub}
              onMouseMove={this.handleMouseMove}
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
            >
              <div className="progress__filled" />
            </div>

            {this.renderPlayButton()}

            <input
              type="range"
              name="volume"
              className="player__slider"
              min="0"
              max="1"
              step="0.05"
              defaultValue="1"
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
              defaultValue="1"
              onChange={this.handleRangeUpdate}
              onMouseMove={this.handleRangeUpdate}
            />
            <Button
              data-skip="-10"
              className="player__button"
              onClick={this.skip}
            >
              «
            </Button>
            <Button
              data-skip="25"
              className="player__button"
              onClick={this.skip}
            >
              »
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
