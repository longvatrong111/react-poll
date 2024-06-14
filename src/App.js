import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Login from './views/Login.js';
import Home from './views/Home.js';

function App() {
  return (
    <div className="App">
      <Login />
    </div>

  );
}

export default App;
