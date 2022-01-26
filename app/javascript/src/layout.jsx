import React from 'react';
import './home.scss';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/"><span className="navbar-brand mb-0 h1 text-danger">Airbnb</span></a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item ml-4">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item ml-4">
              <a className='nav-link' href='/host'>Hosting</a>
            </li>
            <li className="nav-item ml-4">
              <a className='nav-link' href='/patron'>My Trips</a>
            </li>
          </ul>
        </div>
      </nav>
      {props.children}
      <footer className="p-3 bg-light">
        <div>
          <p className="mr-3 mb-0 text-secondary">Airbnb Clone</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;