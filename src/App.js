import React, {Component} from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'f2906421036b46bab0d1c4ab100f72c5'
}); 

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

class App extends Component{
  constructor(){
    super ();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input).then(
    function(response) {
        console.log(response);
    },
    function(err) {

    }
    );
  }

  render() {
    return (
      <div className='App'>
         <Particles className='particles'
                params={particleOptions} />
        {/* Components */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;



// calculateFaceLocation = (data) => {
//   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
//   const image = document.getElementById('inputimage');
//   const width = Number(image.width);
//   const height = Number(image.height);
//   return{
//     leftCol: clarifaiFace.left_col * width,
//     topRow: clarifaiFace.top_row * height,
//     rightCol: width - (clarifaiFace.right_col * width),
//     bottomRow: height - (clarifaiFace.bottom_row * height)
//   }
// }

// displayFaceBox = (box) => {
//   console.log(box);
//   this.setState({box: box});
// }

