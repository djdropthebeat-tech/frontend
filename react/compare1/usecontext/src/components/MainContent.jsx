import React from 'react'
import CounterSection from './CounterSection'
import UserSection from './UserSection'

export default function MainContent() {

  return (
    <div className='main-content'>
        <CounterSection/>
        <UserSection/>
    </div>
  )
}
