import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    background:#018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
    background-size:cover;
    font-family:'helvetica neue';
    text-align: center;
    font-size: 10px;
    height: 100vh;
    padding-top: 100px;


  body {
    margin: 0;
    font-size: 2rem;
    display:flex;
    flex:1;
    min-height: 100vh;
    align-items: center;
  }

  .clock {
    background:#018DED;
    background-size:cover;
    width: 30rem;
    height: 30rem;
    border:20px solid white;
    border-radius:50%;
    margin:0 auto;
    padding-top: 50px;
    position: relative;
    padding:2rem;
    box-shadow:
      0 0 0 4px rgba(0,0,0,0.1),
      inset 0 0 0 3px #EFEFEF,
      inset 0 0 10px black,
      0 0 10px rgba(0,0,0,0.2);
  }

  .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
  }

  .hand {
    width:50%;
    height:6px;
    background:black;
    position: absolute;
    top:50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
  }
`

class Clock extends React.Component {

  componentDidMount(){
    const intervalID = setInterval(this.setDate, 1000)
    this.setState({ intervalID: intervalID })
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalID)
  }

  formatSeconds = (now) => {
    let secondHand = this.refs.secondHand
    let seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  }
  formatMin = (now) => {
    let minHand = this.refs.minHand
    let minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`
  }
  formatHours = (now) => {
    let hourHand = this.refs.hourHand
    let hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
  }


  setDate = () => {
    const now = new Date()
    this.formatSeconds(now)
    this.formatMin(now)
    this.formatHours(now)
  }

  render () {

    return(
      <Container>
        <div className="clock">
          <div className="clock-face">
            <div ref="hourHand" className="hand hour-hand"></div>
            <div ref="minHand" className="hand min-hand"></div>
            <div ref="secondHand" className="hand second-hand"></div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Clock;
