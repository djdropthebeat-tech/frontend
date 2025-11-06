import React, { useReducer,useRef} from 'react'
import './App.css'
import Header from './component/Header'
import TodoEditor from './component/TodoEditor'
import TodoList from './component/TodoList'


const mockTodo = [
  {
    id:0,
    completed:false,
    text:'react 공부하기',
    createdDate: new Date().getTime(), 
  },
  {
    id: 1,
    completed: false,
    text: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    completed: false,
    text: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    completed: false,
    text: "청소하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 4,
    completed: false,
    text: "영화 예매하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 5,
    completed: false,
    text: "디저트 구매하기",
    createdDate: new Date().getTime(),
  },
]


function reducer(state,action){
  switch(action.type){
    case "CREATE":
      return [action.newItem,...state];
    case "UPDATE":
      return state.map((it) =>
        it.id === action.targetId ? {...it, completed : !it.completed} :it
      )
    case "DELETE":
      return state.filter((it)=>it.id !== action.targetId);
    default:
      return state;
  }

}

export default function App() {

  const [todo, dispatch] =useReducer(reducer,mockTodo);

  const idRef = useRef(6);
  
  const onCreate = (text) => {
    dispatch({
      type:"CREATE",
      newItem:{
        id:idRef.current,
        text,
        completed:false,
        createdDate: new Date().getTime(),
      },
    });

    idRef.current +=1;
};

  const onUpdate = (targetId) => {
    dispatch({type:"UPDATE",targetId});
};

  const onDelete = (targetId)=>{
    dispatch({type:"DELETE",targetId});
  };


  return (
    <div className='App'>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}
