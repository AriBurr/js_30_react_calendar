import React from 'react';
import styled from 'styled-components';

class TypeAhead extends React.Component {
  render() {
    const endpoint =
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    return (
      <Container>
        <form className="search-form">
          <input type="text" className="search" placeholder="City or State" />
          <ul className="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
          </ul>
        </form>;
      </Container>
    );
  }
}

const Container = styled.div`
  box-sizing: border-box;
  background: #ffc600;
  font-family: 'helvetica neue';
  font-size: 20px;
  font-weight: 200;
  height: 100vh;
  padding: 5%;
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  input {
    width: 100%;
    padding: 20px;
  }

  .search-form {
    max-width: 400px;
    margin: 50px auto;
  }

  input.search {
    margin: 0;
    text-align: center;
    outline: 0;
    border: 10px solid #f7f7f7;
    width: 120%;
    left: -10%;
    position: relative;
    top: 10px;
    z-index: 2;
    border-radius: 5px;
    font-size: 40px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
  }

  .suggestions {
    margin: 0;
    padding: 0;
    position: relative;
    /*perspective:20px;*/
  }
  .suggestions li {
    background: white;
    list-style: none;
    border-bottom: 1px solid #d8d8d8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }

  .suggestions li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
  }
  .suggestions li:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
  }

  span.population {
    font-size: 15px;
  }

  .hl {
    background: #ffc600;
  }
`;

export default TypeAhead;