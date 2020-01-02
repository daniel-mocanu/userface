import React, {Component} from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLink from './components/imagelink/imagelink';
import Rank from './components/rank/rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecog from './components/facerecog/facerecog';
import SignIn from './components/signin/signin';
import Register from './components/register/register';

const app = new Clarifai.App({
  apiKey: 'dc09075d78b04283aebebb441feff65e'
 });

const particlesOptions = {
    particles: {
      number: {
      value: 30,
      density: {
        enable: true,
        value_area: 250
        }
      }
    }
  }

class App extends Component{
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }
  onRouteChange = (routee) => {
    if (routee === 'signout') {
      this.setState({isSignedIn: false})
    } else if (routee === 'home') {
      this.setState({isSignedIn: true})
    }
   this.setState({route: routee});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    this.setState({box: box})
  
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict( Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }
      

  render() {

  return (
    <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            />
    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
    {this.state.route === 'home'
    ? <div>
      <Logo />
      <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <Rank />
      <FaceRecog  box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
      : ( this.state.route === 'signin'
        ? <SignIn onRouteChange={this.onRouteChange}/> 
        : <Register onRouteChange={this.onRouteChange}/> 
      ) 
    }
    </div>
    );
  } 
}

export default App;
