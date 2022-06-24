import React from "react";

const InputContent = ({createItem}) => {
const [value, setValue] = React.useState("")
const handleSubmit = e => {
  e.preventDefault();
  if (value === ""){
    return console.log("Masukkan Judul To Do")
  }
  createItem(value)
  setValue("")  
}
  return (
    <form onSubmit={handleSubmit}>
      <input className="inputan"
        type="text" 
        placeholder="Create Todo" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>  
    </form>
  )
}

export default InputContent;