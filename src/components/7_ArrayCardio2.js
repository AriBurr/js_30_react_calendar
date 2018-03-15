import React from 'react';
import { people, comments } from '../data/arrayData';
import styled from 'styled-components';

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someCheck = () => {
  const isAdult = people.some(p => new Date().getFullYear() - p.year >= 19);
  console.log(isAdult);
};
// Array.prototype.every() // is everyone 19 or older?
const everyCheck = () => {
  const allAdults = people.every(p => new Date().getFullYear() - p.year >= 19);
  console.log(allAdults);
};
// Array.prototype.find()
// find the comment with the ID of 823423
const findCheck = () => {
  const comment = comments.find(c => c.id === 823423);
  console.log(comment);
};
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndexCheck = () => {
  comments.splice(comments.findIndex(c => c.id === 823423), 1);
  console.log(comments);
};

const ArrayCardioPartTwo = () => (
  <Container>
    <div>
      <h1>Array Cardio Day 2</h1>
      <h3>some, every, find, findIndex</h3>
      <p>
        <em>Psst: have a look at the JavaScript Console</em>
      </p>
    </div>
    {someCheck()}
    {everyCheck()}
    {findCheck()}
    {findIndexCheck()}
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  text-align: center;
`;

export default ArrayCardioPartTwo;
