import React,{useEffect} from 'react';


export default function User({user,onRemove,onToggle}) {

  useEffect(()=>{  
    console.log('user 값이 설정됨');
    console.log(user);npx 
    return() => {  
      console.log('user가 바뀌기전');
      console.log(user);

    };
  },[user]);

  return (
    <div>
        <b style={{
          cursor:'pointer',
          color:user.active ? 'green':'black'
          }}
          onClick={()=>onToggle(user.id)}
        > 
          {user.username}
        </b>
        
        <span>({user.email})</span>
        <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
  );
}
