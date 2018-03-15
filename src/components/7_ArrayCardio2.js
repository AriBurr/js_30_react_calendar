import React from 'react';
import { people, comments } from '../data/arrayData';
import { Grid } from 'semantic-ui-react';

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const oneOlder = people.some(p => {
  console.log(2018 - p.year >= 19);
});
// Array.prototype.every() // is everyone 19 or older?
const allOlder = people.every(p => {
  console.log(2018 - p.year >= 19);
});
// Array.prototype.find()
// find the comment with the ID of 823423
const find = comments.find(c => {
  console.log(c.id === 823423);
});
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteByID = () => {
  comments.splice(comments.findIndex(c => c.id === 823423), 1);
  console.log(comments);
};

const ArrayCardioPartTwo = () => (
  <div>
    {oneOlder()}
    {allOlder()}
    {find()}
    {deleteByID()}
  </div>
)

export default ArrayCardioPartTwo;
