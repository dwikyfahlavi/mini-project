import React from "react";

const Content = ({item, index, deleteItem, completeItem, updateItem}) => {
  return (
    <div className="item-list">
      <li style={{textDecoration: item.complete ? "line-through" : ""}}>{item.title}</li>
      <div className="btn">
        <button onClick={() => completeItem(index)}>Complete</button>
        <button onClick={() => updateItem(index)}>Update</button>
        <button onClick={() => deleteItem(index)}>X</button>
      </div>
    </div>
  );
}

export default Content;