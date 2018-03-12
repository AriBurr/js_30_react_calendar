import React from 'react';
import keys from '../data/1_Drums_data';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 10px;
  background: url(http://i.imgur.com/b9r5sEL.jpg) bottom center;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: sans-serif;

  .keys {
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .key {
    border: 0.4rem solid black;
    border-radius: 0.5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    transition: all 0.07s ease;
    width: 10rem;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 0.5rem black;
  }

  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }

  kbd {
    display: block;
    font-size: 4rem;
  }

  .sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #ffc600;
  }
`;

class Drums extends React.Component {
  componentDidMount() {
    this.addListeners()
  }

  handleKeyPress = key => {
    const element = this.refs[`div${key}`]
    const audio = this.refs[key];
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    element.classList.add('playing')
  };

  removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
  }

  addListeners = () => {
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend', this.removeTransition))
    document.addEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    this.handleKeyPress(e.key.toUpperCase());
  };

  createKeys = () => {
    return keys.map((key, i) => {
      return (
        <div key={i} ref={`div${key.key}`} className="key">
          <kbd>{key.key}</kbd>
          <span className="sound">{key.name}</span>
        </div>
      );
    });
  };

  createAudio = () => {
    return keys.map((key, i) => {
      return (
        <audio
          key={i}
          ref={key.key}
          src={key.sound}
        />
      );
    });
  };

  render() {
    return (
      <Container>
        <div className="keys">
          {this.createKeys()}
          {this.createAudio()}
        </div>
      </Container>
    );
  }
}

export default Drums;
