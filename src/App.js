import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Player from '/Users/andersongh/pt-48-anderson-emmanuel-repructor-musica/src/Player.js';
import Navbar from '/Users/andersongh/pt-48-anderson-emmanuel-repructor-musica/src/Navbar.js';
import Footer from '/Users/andersongh/pt-48-anderson-emmanuel-repructor-musica/src/Footer.js';

function App() {
  return (<>
  <div className="principal-container">
    <div className='app__container'>
      <Navbar />
      <Player />
      <Footer />
    </div>
    </div>
  
  </>
    );
}

export default App;
