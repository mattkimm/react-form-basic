import React , {useState} from 'react'

function App() {

  const [ username ,setUsername] = useState("");

  const [ password ,setPassword] = useState("");

 // value : when we have a value prop and we pass down state 
 // we're telling react that we want controlled component
 // onChange : update state, takes in function . event  object
  return (
    <form>
      <h1>Username is : {username}</h1>
      <h1>Password is : {password}</h1>
      <input type="text"
         value={username}
         onChange = {(e)=>{ setUsername(e.target.value)}}/>
      <input type="text" value={password}
        value={password}
        onChange = {(e)=>{ setUsername(e.target.value)}}/>
    </form>
  )
}

export default App
