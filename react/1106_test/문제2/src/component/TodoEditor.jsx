import React, { useState,useRef } from 'react'


export default function TodoEditor({onCreate}) {

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
    <div className='TodoEditor'>
        <h4>✏️ 새로운 Todo 작성하기</h4>
        <div style={styles.editorWrapper}>
            <input style={styles.input} 
              placeholder='새로운 Todo...'
              value={content}
              onChange={onChangeContent}
              onKeyDown={onKeyDown}
            />
            <button style={styles.btn}
            onClick={onSubmit}>추가</button>
        </div>
    </div>
  )
}


const styles = {

  editorWrapper:{
    width: '100%',
    display: 'flex',
    gap: '10px'
  },
  input:{
    flex:'1',
    boxSizing: 'border-box',
    border: '1px solid rgb(220,220,220)',
    borderRadius: '5px',
    padding: '15px'

  },
  btn:{
    cursor: 'pointer',
    width: '80px',
    border: 'none',
    backgroundColor:'#1f93ff',
    color: '#fff',
    borderRadius: '5px'
  }
}