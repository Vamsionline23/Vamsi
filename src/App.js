import Header from './Component/header';
import Home from './Component/home';
import Services from './Component/services';
import Contact from './Component/contact';
import About from './Component/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/Services' exact Component={Services}/>
      <Route path='/Contact' exact Component={Contact}/>
      <Route path='/About' exact Component={About}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
