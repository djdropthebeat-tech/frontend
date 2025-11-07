import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hoveredUser, setHoveredUser] =useState(null);

const fetchUsers = async () => {
  setLoading(true);
  setError(null);

  try{
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    setUsers(response.data);
  }catch(err){
    if(err.response){
      setError(`서버오류: ${err.response.status}`);
    }else if(err.request){
      setError('서버로부터 응답이 없습니다.');
    }else{
      setError(`요청 오류: ${err.message}`);
    }
  }finally{
    setLoading(false);
  }

};

  useEffect (()=>{
    fetchUsers();
  },[])

  const handleRefresh = () => {
    fetchUsers();
  };



  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.title}>
          사용자 목록
        </h2>
        <button style={styles.refreshBtn}
        onClick={handleRefresh}>
          🔄새로고침
        </button>
      </header>
      {/* 로딩상태 */}
      {loading && (
        <div style={styles.messageContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>로딩중...</p>
        </div>
      )}

      {/* 에러 상태 */}
      {error && (
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>⚠️ {error}</p>
          <button onClick={handleRefresh} style={styles.retryButton}>
            다시 시도
          </button>
        </div>
      )}

      {/* 사용자 목록 */}
      {!loading && !error && (
        <div style={styles.userGrid}>
          {users.map(user => (
            <div
              key={user.id}
              style={{
                ...styles.userCard,
                ...(hoveredUser === user.id ? styles.userCardHover : {})
              }}
              onMouseEnter={() => setHoveredUser(user.id)}
              onMouseLeave={() => setHoveredUser(null)}
            >  
              <div style={styles.userAvatar}>
                {user.name.charAt(0)}
              </div>
              <h3 style={styles.userName}>{user.name}</h3>
              <p style={styles.userEmail}>📧 {user.email}</p>
              <p style={styles.userCompany}>🏢 {user.company.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* 데이터가 없을 때 */}
      {!loading && !error && users.length === 0 && (
        <div style={styles.messageContainer}>
          <p style={styles.emptyText}>사용자 정보가 없습니다.</p>
        </div>
      )}
    </div>
  )
}

const styles ={
  container:{
    width:'100%',
    minHeight: '100vh',
    padding:'50px 60px',
    backgroundColor:'#f4f4f4',
    boxSizing:'border-box',
    
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:'40px',
  },
  title:{
    lineHeight:'0px',
    color:'#333',
  },
  refreshBtn:{
    padding:'7px 15px',
    border:'none',
    backgroundColor:'#2193ff',
    color:'#fff',
    borderRadius:'5px'
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '22px',
  },
  userCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    textAlign: 'center',
  },
  userCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
  },
  userAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#2193ff',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '27px',
    fontWeight: '800',
    margin: '0 auto',
  },
  userName: {
    margin: '15px 0',
    color: '#333',
    fontSize: '22px',
  },
  userEmail: {
    color: '#666',
    fontSize: '14px',
    margin: '7px 0',
  },
  userCompany: {
    color: '#888',
    fontSize: '14px',
    margin: '7px 0',
  },
  emptyText: {
    fontSize: '17px',
    color: '#999',
  },
   messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #007bff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    color: '#666',
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  errorText: {
    color: '#dc3545',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  retryButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
}
