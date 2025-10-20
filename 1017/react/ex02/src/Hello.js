import React from 'react'

function Hello({color,name='이름없음', isSpecial}) {
  return (
    <div style={{color}}>
        {isSpecial ? <b>*</b> :null}
        안녕하세요.{name}
    </div>
    // 중괄호 두 개: React JSx의 문법
    // 첫 번째 중괄호는 자바스크립트 표현식
    // 두 번째 중괄호는 자바스크립트 객체 리터럴
    // 비구조화 할당: 좀 더 간결하게 작성 가능
  );
}
export default Hello;
