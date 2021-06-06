import './App.css';
import video from './video.mp4'

function pauseResumeVideo() {
  var element = document.getElementById('video');
  var btn = document.getElementById('btn');
  if (element.paused) {
    element.play();
    btn.style.backgroundColor = "#c20000";
    btn.textContent = "Pausar video";
  } else {
    element.pause();
    btn.style.backgroundColor = "#0d8500";
    btn.textContent = "Resumir video";
  }

}

function App() {
  return (
    <div id="MainBanner" className="fondo">
      <video id='video' autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <button className="button" id="btn" onClick={()=>{pauseResumeVideo()}}>Pausar Video</button>
      </div>
    </div>
  );
}

export default App;
