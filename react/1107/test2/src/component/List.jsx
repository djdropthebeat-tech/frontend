import React, { useState,useMemo } from 'react'
import ListItem from './ListItem'
import './List.css'

export default function List({todo,onUpdate,onDelete}) {

  const [search,setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  const getSearchResult = () => {
    return search === "" ? todo : todo.filter((it)=>it.text.toLowerCase().includes(search.toLowerCase()));  
}


  const analyzeTodo =useMemo(()=>{
    const totalCount = todo.length;
    const doneCount = todo.filter((it)=>it.completed).length;
    return{
      totalCount,
      doneCount
    }
  },[todo]);

  const {totalCount,doneCount} =analyzeTodo;

  return (
    <div className='List'>
        <h4> Todo List🌱</h4>
        
        <p> 📌 전체 할 일: {totalCount} </p>
        <p> 📌 완료된 할 일: {doneCount}</p>

        <input
          className='searchbar'
          placeholder='검색어를 입력하세요.' 
          onChange ={onChangeSearch}
          value={search}
        />
        
        <div className="list_wrapper">
          {getSearchResult().map((it)=>(
            <ListItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
          ))} 
        </div>
    </div>
  )
}
