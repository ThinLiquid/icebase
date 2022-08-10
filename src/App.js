import './App.css';

import Wrapper from './components/Wrapper';

import HomeGradient from './assets/images/HomeGradient.png';

function App() {
  return (
    <Wrapper>
      <div className="heading">
            <img src={HomeGradient} alt="cool gradient" width="100%"/>
            <div className="content">
                <h1>Stream <span className="special">unlimited</span> music for free.</h1>
                <p>With Icebase Music, you can stream unlimited music, or publish and monetize your own music. We only share 15% of your earnings, <span className="special">with easy transaction methods</span>.</p>
                <button className="special-btn">Open in Browser</button>
            </div>
        </div>
    </Wrapper>
  );
}

export default App;
