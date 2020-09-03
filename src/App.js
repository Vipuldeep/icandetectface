import React, {Component} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Components */}
        <Navigation />
        <Logo />
        {/* <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
