import React from 'react';
import ReactDOM from 'react';
import Host from './host.jsx';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Host />,
      document.body.appendChild(document.createElement('div')),
    )
  })