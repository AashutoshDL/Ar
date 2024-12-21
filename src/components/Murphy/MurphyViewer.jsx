import "@google/model-viewer";
import "./Murphy.css";
import { useEffect } from "react";

const Murphy = () => {
//   useEffect(() => {
//     const modelViewer = document.querySelector("#goCartAr");

//     const handleARStatusChange = () => {
//       if (modelViewer.getAttribute("ar-status") === "session-started") {
//         modelViewer.setAttribute("touch-action", "none"); // Disable touch in AR mode
//       } else {
//         modelViewer.setAttribute("touch-action", "pan-y"); // Enable touch in normal mode
//       }
//     };

//     // Listen for AR status changes
//     modelViewer.addEventListener("ar-status", handleARStatusChange);

//     return () => {
//       // Clean up the event listener
//       modelViewer.removeEventListener("ar-status", handleARStatusChange);
//     };
//   }, []);

  return (
    <div className="row">
      <div id="card">
        <model-viewer
          id="goCartAr"
          src="/public/Murphy.glb"
          ios-src="/public/NewGoCart_1.usdz"
          poster="/public/GoKart.png"
          alt="Skill Museum's Murphy"
          shadow-intensity="1"
          ar
          camera-controls
          touch-action="none" // Default touch action
          disable-tap
          autoplay
          position="0 0 0"
          ar-scale="fixed"
          scale="0.001 0.001 0.001"
          ar-modes="webxr scene-viewer"
          ar-placement="floor"
          interaction-prompt="none">
          {/* Custom AR Button */}
          {/* <button
            slot="ar-button"
            onClick={() => {
              const modelViewer = document.querySelector("#goCartAr");
              if (modelViewer.getAttribute("ar-status") === "session-started") {
                modelViewer.setAttribute("touch-action", "none");
              } else {
                modelViewer.setAttribute("touch-action", "pan-y");
              }
            }}
          >
            👋 Activate AR
          </button> */}
        </model-viewer>
        <section className="attribution">
          <span>
            <h1>Murphy</h1>
            <p>
              Companion and Pet Robot
            </p>
          </span>
        </section>
      </div>
    </div>
  );
};

export default Murphy;
