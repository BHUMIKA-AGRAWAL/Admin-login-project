import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const SignIn = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [teams, setTeams] = useState('');
  const [condition, setCondition] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Details Submitted:', { userId, name, city, contactNumber, teams, condition });
    
    setUserId('');
    setName('');
    setCity('');
    setContactNumber('');
    setTeams('');
    setCondition('');
  };

  const handleSignIn = () => {
    const correctUsername = 'user';
    const correctPassword = 'password';
    if (username === correctUsername && password === correctPassword) {
      setSignedIn(true);
      setLoginError(false);
    } else {
      setSignedIn(false);
      setLoginError(true);
    }
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/User">
            {signedIn ? (
              <Redirect to="/SignIn" />
            ) : (
              <div>
                <h2>User Login</h2>
                <div>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {loginError && <p style={{ color: 'red' }}>Incorrect username or password</p>}
                <button type="button" onClick={handleSignIn}>Sign In</button>
              </div>
            )}
          </Route>
          <Route path="/SignIn">
            {signedIn ? (
              <div>
                <h2>Add User Details</h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="userId">User ID:</label>
                    <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input type="text" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="teams">Teams:</label>
                    <input type="text" id="teams" value={teams} onChange={(e) => setTeams(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="condition">Condition:</label>
                    <input type="text" id="condition" value={condition} onChange={(e) => setCondition(e.target.value)} />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            ) : (
              <Redirect to="/SignIn" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default SignIn;
