import Home from './components/Home';
import Beers from './components/Beers';
import Footer from './components/Footer';
import './App.css';

function App () {
  return(
  <main className='container'>
   <Beers />
   <Home />
   <Footer />
  </main>
  )
}

export default App;
