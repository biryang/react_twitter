import React, { useState } from 'react';
import './App.css';
import AppRouter from 'components/Router';
import { authService } from 'firebase/AppFirebase'

function App() {
  console.log(authService.currentUser)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} React_Twitter</footer>
    </div >
  );
}

export default App;
