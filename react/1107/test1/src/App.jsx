import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () =>{
    setCount(count+1);
  }
  const handleDecrease = () =>{
    setCount(count-1);
  }
  const handleReset = () =>{
    setCount(0);
  }

  const changeColor = () => {
    if (count >0) return '#0f44f5';
    if (count <0) return '#fc0328';
    return '#111'
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>카운터 앱</h1>
      <p style={{
        ...styles.count,
        color:changeColor()
      }}
      >{count}</p>
      <div style={styles.btnGroup}>
        <button style={styles.btn} onClick={handleIncrease}>증가</button>
        <button style={styles.btn} onClick={handleDecrease}>감소</button>
        <button style={styles.resetBtn} onClick={handleReset}>초기화</button>
      </div>
    </div>
  )
}


const styles ={
  container:{
    display:'flex',
    flexDirection:'column',
    width:'45vw',
    margin:'10vh auto',
    padding:'80px 25px',
    backgroundColor:'#f4f4f4',
    textAlign:'center',
    alignItems:'center'
  },
  title:{
    color:'#333',
    fontSize:'30px',
    padding:'30px 0'
  },
  count:{
    // color:'#0f44f5',
    fontSize:'90px',
    fontWeight:'700',
  },
  btnGroup:{
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gap:'16px',
    padding:'30px',
  },
  btn:{
    color:'#fff',
    backgroundColor:'#0f7bf7',
    padding:'12px 17px',
    border:'none',
    borderRadius:'5px',
    fontSize:'17px',
  },
  resetBtn:{
    color:'#fff',
    backgroundColor:'#777',
    padding:'12px 17px',
    border:'none',
    borderRadius:'5px',
    fontSize:'17px',
  }

}