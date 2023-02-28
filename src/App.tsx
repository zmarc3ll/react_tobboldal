import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Product from './Product';

class App extends React.Component {

  render() {
    return <div>
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Főoldal</Link></li>
            <li><Link to='/about'>Rólunk</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<p>Elérhetőségek, rólunk stb.</p>} />
          <Route path='/user'>
            <Route path='profile' element={<p>User profile</p>} />
            <Route path='settings' element={<p>User settings</p>} />
          </Route>
            <Route path='/products/:productId' element={<Product/>} />
            <Route path='/*' element={<p>Ilyen oldal nincs</p>} />
        </Routes>
      </main>
    </div>
  }
}
export default App;