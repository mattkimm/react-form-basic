import React , {useState} from 'react'

function App() {

  const [ formData, setFormData] = useState({
    isAgree : false,
    gender : ""
  })


  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type ==="checkbox" ? target.checked : target.value

    setFormData({
      ...formData,
      [name]  : value
    })
  }
  

  return (
    <form>
      <div>
        <label>Male : </label>
        <input type="radio" name="gender" value="male"
        onChange = {handleChange} checked={formData.gender === "male"}/>
        <label>Feemle : </label>
        <input type="radio" name="gender" value="female"
        onChange = {handleChange} checked={formData.gender === "female"}/>
      </div>
      <div>
        <input type="checkbox" name="isAgree"
         checked={formData.isAgree}
         onChange = {handleChange}
         />
        <label> Agree?</label>
      </div>
      <p>Gender : {formData.gender}
        isAgree : {formData.isAgree ? "true" : "false"}
      </p>
    </form>
  )
}

export default App
