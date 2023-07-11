import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Details from './Details.jsx';
import Home from './Home.jsx'
import React from 'react';
import Navbar from './components/Navbar'
import Scrolly from './components/Scrollprogress';
import AddNew from './AddNew';
import EditBlog from './EditBlog';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Scrolly />
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/details/:slug' element={<Details />}></Route>
        <Route exact path='/newblog' element={<AddNew />}></Route>
        <Route exact path='/editblog/:slug' element={<EditBlog />}></Route>
      </Routes>
    </>
  );
}

export default App;
