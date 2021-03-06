import { authService, firebaseInstance } from "firebase/AppFirebase"
import React, { useState } from "react"

const Auth = () => {
  //Hook 설정 email password 변경시 적용
  //email, password, newAccount 상태값
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }
  const onSubmit = async (event) => {
    //preventDefault 기본동작 제어 고유 동작 정지
    event.preventDefault();
    let data
    try {
      if (newAccount) {
        //create 계정을 정상적으로 만들면 로그인
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        //log in
        data = await authService.signInWithEmailAndPassword(email, password)
      }
    } catch (error) {
      setError(error.message)
    }
  }
  const toggleAccount = () => setNewAccount(preview => !preview)
  const onSocialClick = async(event) => {
    const {
      target: { name },
    } = event
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider()
    } else {
      //another case
    }
    const data = await authService.signInWithPopup(provider)
    console.log(data)
  }
  return (
    <div>
      <p>Auth</p>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Creat Account"}</span>
      <div>
        <button name="google" onClick={onSocialClick}>Continu With Google</button>
      </div>
    </div>
  )
}
export default Auth;