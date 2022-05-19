import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import LocationsPage from './pages/LocationsPage';
import PlanPage from './pages/PlanPage';
import ProfilePage from './pages/ProfilePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container>
        <Routes>
          <Route path='/' element={<LocationsPage/>}/>
          <Route path='/plan' element={<PlanPage/>}/>
          <Route path='/locations' element={<LocationsPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
