import React from 'react'

export default function Header() {
  return (
    <div>
      <h3>📆 오늘은</h3>    
      <h1 style={styles.h1}>{new Date().toDateString()}</h1>
    </div>
  )
}

const styles = {
    h1:{
    marginBottom: '0px',
    color:'#1f93ff'
  } 
}