import React, {Component} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import 'tachyons';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    // line_linked: {
    //   shadow: {
    //     enable: true,
    //     color: "#3CA9D1",
    //     blur: 5
    //   }
    //   }
    // }
    number: {
      value: 30,
      density: {
      enable: true,
      value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
         <Particles className='particles'
                params={particleOptions} />
        {/* Components */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition />  */}
      </div>
    );
  }
}

export default App;
