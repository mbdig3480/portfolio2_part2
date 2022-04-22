import React from "react"
import './App.css';
import AddShow from "./components/AddShow";
import Example from './components/Example';
import LikeButton from './components/LikeButton';
import Poll from './components/Poll';
import UserExplanation from "./components/UserExplanation";

function App() {

  return (
    <div className="App">
      <div>
        <Example show="Attack on Titan" character="Armin" />
        <br></br>
        <AddShow></AddShow>
      </div>

      <br></br>

      <div>
        <div>
          <h1>Post 1</h1>
          <p>Hello world</p>
          <p><LikeButton></LikeButton></p>
        </div>
        <div>
          <h1>Post 2</h1>
          <p>React is a framework</p>
          <p><LikeButton></LikeButton></p>
        </div>
        <div>
          <h1>Post 3</h1>
          <p>Kinetic sand is cool</p>
          <p><LikeButton></LikeButton></p>
        </div>
        <div>
          <h1>Post 4</h1>
          <p>Can you hear me?</p>
          <p><LikeButton></LikeButton></p>
        </div>
      </div>

      <br></br>

      <div>
        <Poll></Poll>
      </div>

      <div>
        <UserExplanation></UserExplanation>
      </div>
    </div>
  );
}

export default App;
