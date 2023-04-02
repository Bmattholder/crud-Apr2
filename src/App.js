import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import PeopleForm from './components/PeopleForm';
function App() {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<PeopleForm />} />
        </Routes>
    </Router>
  );
}

export default App;
