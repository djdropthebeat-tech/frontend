import React, {useState, useRef} from 'react'
import './Writer.css'

export default function Writer({onCreate}) {

  const [content,setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e)=>{
    setContent(e.target.value);
    console.log(e.target.value);

  };

  const onKeyDown = (e)=>{
    if(e.keyCode === 13){
      onSubmit();
    }
  }

  const onSubmit = ()=>{
    if(!content){
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }
  return (
    <div className='Writer'>
        <h4>새로운 Todo 작성하기✏️</h4>
        <div className="writer_wrapper">
            <input 
              placeholder='새로운 Todo...'
              value={content}
              onChange={onChangeContent}
              onKeyDown={onKeyDown}
            />
            <button className='addBtn' onClick={onSubmit}>추가</button>
        </div>
    </div>
  )
}
