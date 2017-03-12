import React from 'react';
import logo from '../logo-light.svg';
import './Footer.css';

function Footer(props) {
  return (
    <footer className="App-footer">
      <div className="container">
        <a href="https://www.adslot.com/">
          <img src={logo} className="App-footer-logo" alt="logo" />
        </a>
        <hr />
        <nav className="footer-nav">
          <a className="footer-nav-a" href="https://www.adslot.com/">&copy;2012 Adslot</a>
          <a className="footer-nav-a" href="http://www.adslot.com/directsales/">Adslot Publisher</a>
          <a className="footer-nav-a" href="https://create.adslot.com/">Adslot Create</a>
          <a className="footer-nav-a" href="https://media.adslot.com/terms">Terms</a>
          <a className="footer-nav-a" href="https://www.adslot.com/privacy-policy/">Privacy Policy</a>
          <a className="footer-nav-a" href="https://publisher.adslot.com/payment-terms">Payment Policy</a>
        </nav>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  company: React.PropTypes.object.isRequired,
};

export default Footer;
