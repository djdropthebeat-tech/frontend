import React from 'react'
import './ListItem.css'

export default function ListItem({id, text, completed, createdDate, onUpdate, onDelete}) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  }

  const onClickDelete = () => {
    onDelete(id);
  };



  return (
    <div className='ListItem'>
        <div className="checkbox_col">
            <input type="checkbox" checked={completed}
            onChange={onChangeCheckBox}
            />
        </div>
        <div className={`title_col ${completed ? "checked" : ""}`}>
          {text}
        </div>
        <div className="date_col">
            {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="btn_col">
            <button onClick={onClickDelete}>삭제</button>
        </div>
    </div>
  )
}
