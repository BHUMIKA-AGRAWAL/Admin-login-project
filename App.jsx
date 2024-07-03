import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import User from './components/User';
import Home from './components/Home';
import Admin from './components/Admin';
import UserDetail from './components/UserDetail';
import BackButton from './components/BackButton';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>          
          <Route exact path="/" element={<Home />} />
          <Route  path="/BackButton" element={<BackButton />} />               
          <Route  path="/admin/UserList" element={<UserList />} />       
          <Route  path="/admin" element={<Admin />} />
          <Route  path="/admin/user/:userId" element={<UserDetail />} />
          <Route  path="/User" element = {<User />} />
          <Route  path="/UserForm" element = {<UserForm />} />
          <Route  path="/UserDetail/:userId" element={<UserDetail />} />
          <Route  path="/UserList" element={<UserList />} />
          <Route path="/admin/UserList/:userId" element={<UserDetail />} />         
        </Routes>
      </div>
    </Router>
  );
};
export default App;