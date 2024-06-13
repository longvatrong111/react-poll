import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Login from './views/Login.js';
import Home from './views/Home.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className='.App'>
      <BrowserRouter>
        <Routes>
          <Route index path="/" exact component={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route index path="/Login" component={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
