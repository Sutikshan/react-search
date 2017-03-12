import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-main">
      </div>
      <Footer company={props.data.company} />
    </div>
  );
}

App.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default App;
