import React from 'react';
import logo from '../logo-light.svg';
import './Footer.css';

function Footer(props) {
  const links = props.company.links;

  return (
    <footer className="App-footer">
      <div className="container">
        <a href="https://www.adslot.com/">
          <img src={logo} className="App-footer-logo" alt="logo" />
        </a>
        <hr />
        <nav className="footer-nav">
          {Object.keys(links).map((key) =>
            (<a key={key} className="footer-nav-a" href={links[key]}>{key}</a>))}
        </nav>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  company: React.PropTypes.object.isRequired,
};

export default Footer;
