import React, { useState,useMemo } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'


export default function TodoList({todo,onUpdate,onDelete}) {

  const [search,setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  const getSearchResult = () => {                            
    return search === "" ? todo : todo.filter((it)=>it.content.toLowerCase().includes(search.toLowerCase()));  
}


  const analyzeTodo =useMemo(()=>{
    const totalCount = todo.length;
    const doneCount = todo.filter((it)=>it.isDone).length;
    return{
      totalCount,
      doneCount
    }
  },[todo]);

  const {totalCount,doneCount} =analyzeTodo;

  return (
    <div className='TodoList'>
        <h4>🌱 Todo List</h4>
        <div> 총개수:{totalCount} </div>
        <div> 완료된 할 일 {doneCount}</div>
        <input
        className='searchbar'
        placeholder='검색어를 입력하세요.' 
        onChange ={onChangeSearch}
        value={search}

        />
        
        <div className="list_wrapper">
          {getSearchResult().map((it)=>(
            <TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
          ))} 
        </div>
    </div>
  )
}
