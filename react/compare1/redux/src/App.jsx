import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'


export default function App() {

  return (
    <div className='app'>
      <Header/>
      <MainContent/>
    </div>
  )
}


// redux란?
// 앱 전체가 공유하는 데이터 창고
// 어디서든 데이터를 읽고(userSelector) 변경(dispatch) 할 수 있다.

// 언제사용?
// props를 3단계 시아 전달, 컴포넌트 50개 이상일 때
// 핵심개념
// store(창고) + userSelector (읽기) + disapatch (쓰기)