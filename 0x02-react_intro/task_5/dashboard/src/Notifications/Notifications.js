import React from 'react';
import './Notifications.test';
import closeIcon from '../assets/close-icon.svg';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
  return (
    <div className='Notifications'>
      <button
        style={{
          position: 'absolute',
          right: '10px',
          top: '15px',
          cursor: 'pointer',
          color: 'black',
          background: 'none',
          border: 'none'
        }}
        aria-label='Close'
        onClick={(evt) => { console.log('Close button has been clicked'); }}
      >
        <img src={closeIcon} alt='Close Icon' style={{ width: '12px' }}></img>
      </button>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <li data-priority="default">
          New course available
        </li>
        <li data-priority="urgent">
          New resume available
        </li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
        </li>
      </ul>
    </div>
  );
}

export default Notifications;