import React, { useState } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'


export default function TodoList({todo,onUpdate,onDelete}) {

  const [search,setSearch] = useState("");
  // useState  리랙트 훅을 만든다. - search 검색 단어를  관리
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    // 검색 폼의 value (타이핑치는 글자) state 변수 search(검색단어)를 설정
  }
  const getSearchResult = () => {                            //대소문자바꿔서 검색에 용이하게 
    return search === "" ? todo : todo.filter((it)=>it.content.toLowerCase().includes(search.toLowerCase()));  
    // search === "" ? todo :검색 단어가 없으면 todo prop자체를 리턴
    // 검색 단어가 있으면 it 항목에 search에 저장돼있는 (단어) 포람되어 있으면 it(레코드)을 리턴
}


  return (
    <div className='TodoList'>
        <h4>🌱 Todo List</h4>
        <input
        className='searchbar'
        placeholder='검색어를 입력하세요.' 
        onChange ={onChangeSearch}
        // 검색 폼의 onChange 이벤트 핸들러 onChangeSearch 만듦
        value={search}

        />
        
        <div className="list_wrapper">
          {getSearchResult().map((it)=>(
            // getSearchResult() 함수호출해서 결과값을 map으로 반복
            <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
            // <TodoItem key={it.id} id={it.id} content={it.content} isDone={it.isDone}/>
          ))} 
          {/* ...it: 전개 연산자 (Spread Operator)*/}
          {/* 객체의 속성을 펼쳐서 자식 컴포넌트 (TodoItem)로 전달하는 역할*/}
        </div>
    </div>
  )
}
