import "@google/model-viewer";
import "./App.css";

const App = () => {
  return (
    <div className="row">
      <div id="card">
        <model-viewer
          id="goCartAr"
          src="./assets/NewGoCart_1.glb"
          ios-src="./assets/NewGoCart_1.usdz"
          poster="./assets/GoKart.png"
          alt="Skill Museum's GoKart"
          shadow-intensity="1"
          ar
          camera-controls
          touch-action="none"
          disable-tap
          autoplay
          position="0 0 0"
          scale="0.001 0.001 0.001"
          ar-modes="webxr scene-viewer"
          ar-placement="floor"
          interaction-prompt="none"
        ></model-viewer>
        <section className="attribution">
          <span>
            <h1>Go Kart</h1>
          </span>
        </section>
      </div>
    </div>
  );
};

export default App;
