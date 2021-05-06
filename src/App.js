import React , {useState} from 'react'

function App() {

 const [user, setUser] = useState({
   username : "",
   password : "",
 })
 
 const onChangeUser = (e) => {
   setUser({
     ...user,
     [e.target.name] : e.target.value
   })
 }
 const onSubmit = (e)=>{
   e.preventDefault();
   console.log(user);
 }

 // name prop should match the property within this object
  return (
    <form onSubmit={onSubmit}>
      <h1>Username is : {user.username}</h1>
      <h1>Password is : {user.password}</h1>
      <input type="text"
         value={user.username}
         name="username"
         onChange = {onChangeUser}/>
      <input type="text" value={user.password}
        value={user.password}
        name="password"
        onChange = {onChangeUser}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
