import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'


export default function TodoList({todo}) {
  return (
    <div className='TodoList'>
        <h4>🌱 Todo List</h4>
        <input className='searchbar' placeholder='검색어를 입력하세요.' />
        <div className="list_wrapper">
          {todo.map((it)=>(
            <TodoItem key={it.id} {...it}/>
            // <TodoItem key={it.id} id={it.id} content={it.content} isDone={it.isDone}/>
          ))} 
          {/* ...it: 전개 연산자 (Spread Operator)*/}
          {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)로 전달하는 역할*/}
        </div>
    </div>
  )
}
