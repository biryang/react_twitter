import { authService } from "firebase/AppFirebase"
import React, { useState } from "react"

const Auth = () => {
  //Hook 설정 email password 변경시 적용
  //email, password, newAccount 상태값
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
    console.log(email, password)
  }
  const onSubmit = async (event) => {
    //preventDefault 기본동작 제어 고유 동작 정지
    event.preventDefault();
    console.log(email, password)
    let data
    try {
      if (newAccount) {
        //create 계정을 정상적으로 만들면 로그인
        data = await authService.createUserWithEmailAndPassword(email, password)
      } else {
        //log in
        data = await authService.signInWithEmailAndPassword(email, password)
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
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
          value={newAccount ? "Create Account" : "Log In"}
        />
      </form>
      <div>
        <button>Continu With Google</button>
      </div>
    </div>
  )
}
export default Auth;