import React from 'react';
import styled from 'styled-components';

class Canvas extends React.Component {
  state = {
    isDrawing: false,
    direction: true,
    hue: 0,
    lastX: 0,
    lastY: 0
  };

  componentDidMount() {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    this.setState({ ctx: ctx });
  }

  handleChange = e => {
    const { ctx, direction, hue, lastX, lastY } = this.state;
    if (!this.state.isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    this.setState({
      hue: hue >= 360 ? 0 : hue + 1,
      lastX: e.clientX,
      lastY: e.clientY
    });
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
    if (ctx.lineWidth >= 75 || ctx.lineWidth <= 1)
      this.setState({ direction: !direction });
  };

  onMouseDown = e => {
    this.setState({ isDrawing: true, lastX: e.clientX, lastY: e.clientY });
  };

  onMouseUp = () => this.setState({ isDrawing: false });
  onMouseOut = () => this.setState({ isDrawing: false });

  render() {
    return (
      <Container>
        <canvas
          id="draw"
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseMove={this.handleChange}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
          onMouseOut={this.onMouseOut}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0;
`;

export default Canvas;
