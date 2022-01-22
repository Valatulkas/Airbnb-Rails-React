import React from 'react';
import ReactDOM from 'react-dom';
import Patron from './patron';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Patron />,
    document.body.appendChild(document.createElement('div')),
  )
})