import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () =>{
    setCount(count+1);
  }
  const handleDecrease = () =>{
    setCount(count-1);
  }
  const handleReset = ()=>{
    setCount(0);
  }

   const getCountColor = () => {
    if (count > 0) return 'blue';
    if (count < 0) return 'red';
    return 'black';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>카운터 앱</h1>
      <p style={{
        ...styles.countText,
        color:getCountColor()
      }}
        >{count}
      </p>

      <div style={styles.btnGroup}>
        <button style={styles.btn} onClick={handleIncrease}>+1</button>
        <button style={styles.btn} onClick={handleDecrease}>-1</button>
        <button style={styles.resetBtn} onClick={handleReset}>초기화</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display:'flex',
    width:'80vw',
    margin:'7vh auto',
    padding: '40px',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#f4f4f4'
  },
  title:{
    color:'#333',
    fontSize:'40px',
    fontWeight:'700',
    padding:'45px 0'
  },
  countText:{
    // color:'#0011ffff',
    fontSize: '100px',
    fontWeight:'700'
  },
  btnGroup:{
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gap:'14px',
    padding:'30px'
  },
  btn:{
    padding:'12px 22px',
    borderRadius:'5px',
    border:'none',
    backgroundColor:'#0f7bf7',
    color:'#fff',
    fontSize:'18px'
  },
  resetBtn:{
    padding:'12px 22px',
    borderRadius:'5px',
    border:'none',
    boxShadow:'0 5px 7px rgba(0,0,0,0.2)',
    backgroundColor:'#666',
    color:'#fafafa',
    fontSize:'17px'
  }

}
