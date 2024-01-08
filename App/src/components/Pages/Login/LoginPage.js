import React from 'react';
import Masonry from 'react-masonry-css';
import './login.css'; // Make sure to create this CSS file
import { loginUser } from '../../../BackendFunctions/Login';
const imageUrls = ['https://i.gifer.com/7Sh4.gif', 'https://i.pinimg.com/originals/62/9a/af/629aaf3e2c11c0b96655ece18013e568.gif', 
'https://preview.redd.it/nha9h7ujyhn91.gif?width=640&crop=smart&auto=webp&s=35b3c752416891024d71de592a2d67120d7ce663',
"https://image-uploader-bucket1.s3.amazonaws.com/photo/80b45994-16a5-4e15-b490-3d9336bad750"
,"https://64.media.tumblr.com/a5c94a6e0d874caffe686e9fac177d4a/tumblr_n8x8eu5CHe1qfwa93o1_500.gif",
"https://media1.tenor.com/m/Ms8Tbk4dEZ0AAAAC/akira.gif"
]; 



class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { fadeStates: Array(imageUrls.length).fill(true) };
      this.minVisible = 4; // Minimum number of images to be visible
    }
  
    componentDidMount() {
      this.interval = setInterval(this.updateFadeStates, 2000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    updateFadeStates = () => {
      let newFadeStates = [...this.state.fadeStates];
      let visibleCount = newFadeStates.filter(visible => visible).length;
  
      // Randomly adjust fade states
      newFadeStates = newFadeStates.map(state => (Math.random() < 0.5 ? !state : state));
  
      // Correct number of visible images to maintain minimum
      while (newFadeStates.filter(visible => visible).length < this.minVisible) {
        let indexToActivate = this.getRandomIndex(newFadeStates, false);
        newFadeStates[indexToActivate] = true;
      }
  
      this.setState({ fadeStates: newFadeStates });
    };
  
    getRandomIndex(array, value) {
      let randomIndex;
      let filteredIndices = array.map((item, index) => (item === value ? index : -1)).filter(index => index !== -1);
      randomIndex = filteredIndices[Math.floor(Math.random() * filteredIndices.length)];
      return randomIndex;
    }
  
    render() {
        return (
          <div className="login-page">
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {imageUrls.map((url, index) => (
                <div
                  key={url}
                  className={`image-container ${this.state.fadeStates[index] ? 'fade-in' : 'fade-out'}`}
                  style={{ backgroundImage: `url(${url})` }}>
                </div>
              ))}
            </Masonry>
            {/* Add your login form here */}
          </div>
        );
      }
    }
    
    export default LoginPage;