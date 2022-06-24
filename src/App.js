import React from 'react'

import './App.css';
import InputContent from './Components/Input';
import Content from './Components/Content';

function App() {
  const [items, setItem] = React.useState(
    [
      {
        title : "Mow The Lawn",
        complete : false
      },
      {
        title : "Do Laundry",
        complete : false
      },
      {
        title : "Dinner",
        complete : false
      },
    ]
  )

  const createItem = (item) => {
    const addItem = [...items, {title : item, complete : false}]
    setItem(addItem)
  }

  const updateItem = (index) => {
    const oldList = [...items]
    const selected = oldList[index];
    let update = prompt(`Update ${selected.title}?`, selected.title)
    let newItem = {title : update, complete : false}
    oldList.splice(index, 1, newItem)
    if (update === null || update === ""){
      return
    }else{
      selected.title = update
    }
    setItem(oldList)
  }

  const deleteItem = (index) => {
    const removeItem = [...items]
    removeItem.splice(index,1)
    setItem(removeItem)
  }

  const completeItem = (index) => {
    const completed = [...items]
    completed[index].complete === false
    ? (completed[index].complete = true)
    : (completed[index].complete = false)
    setItem(completed)
  }

  return (
    <div className='App'>
      <InputContent createItem={createItem}/>
      {items.map((item, index) => (
        <Content key={index} index={index} item={item} deleteItem={deleteItem} completeItem={completeItem} updateItem={updateItem}/>
      ))}
    </div>
  );
}
export default App;
