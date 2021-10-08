import React, { useEffect, useRef, useState } from 'react';
import { Router, RouteComponentProps, Link } from '@reach/router'
import { HomePage, UploadPage } from './pages'

function App() {
  return (
    <Router>
      <HomePage path='/' />
      <UploadPage path='/upload' />
    </Router>
  );
}

export default App;
