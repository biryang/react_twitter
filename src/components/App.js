import React, { useEffect, useState } from 'react';
import './App.css';
import AppRouter from 'components/Router';
import { authService } from 'firebase/AppFirebase'

function App() {
  console.log(authService.currentUser)
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    //사용자를 가져올 때 Auth 객체가 중간 단계(초기화 등)에 있지 않도록 할 수 있다.
    //로그인 여부 판별
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  })

  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing'}
      <footer>&copy; {new Date().getFullYear()} React_Twitter</footer>
    </div >
  );
}

export default App;
