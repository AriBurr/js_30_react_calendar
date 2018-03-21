import React from 'react';
import '../styles/localStorage.css';

class LocalStorage extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <h2>LOCAL TAPAS</h2>
          <p />
          <ul className='plates'>
            <li>Loading Tapas...</li>
          </ul>
          <form className='add-items'>
            <input type='text' name='item' placeholder='Item Name' required />
            <input type='submit' value='+ Add Item' />
          </form>
        </div>
      </div>
    );
  }
}

export default LocalStorage;
