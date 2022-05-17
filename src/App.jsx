import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import LocationsPage from './components/Locations/LocationsPage';
import PlanPage from './components/Plan/PlanPage';
import ProfilePage from './components/Profile/ProfilePage';
import {FaCalendarAlt, FaUsers, FaLocationArrow} from 'react-icons/fa';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <navbar>
            <ul>
              <li>
                <NavLink to='/plan' className='btn btn-header'>
                  <FaCalendarAlt/>
                  <span>Plan</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/locations' className='btn btn-header'>
                  <FaLocationArrow/>
                  <span>Locations</span>
                </NavLink>
              </li>
              <li>
                <NavLink to='/profile' className='btn btn-header'>
                  <FaUsers/>
                  <span>Profile</span>
                </NavLink>
              </li>
            </ul>
          </navbar>
        </header>

        <Routes>
          <Route path='/plan' element={<PlanPage/>}/>
          <Route path='/locations' element={<LocationsPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
