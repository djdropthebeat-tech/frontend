import React from 'react'
import './TodoItem.css'

export default function TodoItem({id, content, isDone, createdDate, onUpdate, onDelete}) {
  const onChangeCheckBox = () => {
    onUpdate(id);
  }

  // const element =document.querySelector('title_col');
  //   element.classList.add('checked');

  const onClickDelete = () => {
    onDelete(id);
  };



  return (
    <div  className='TodoItem'>
        <div className="checkbox_col">
            <input type="checkbox" checked={isDone}
            onChange={onChangeCheckBox}

            />
        </div>
        <div className="title_col" >
          {content}
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
