import React, { useEffect } from 'react'

export default function FixAnimation({visible,onFinished}) {
    useEffect(()=>{
        // 조건확인
        if(!visible){
            return;
        }
        // 타이머 설정
        const timer = window.setTimeout(()=>{
            // 3.2초후에 onFinished 콜백함수
            onFinished?.(); //옵셔닝 체이닝으로 안전하게 호출
        },3200);
        // 클린업 함수 - 컴포넌트가 언마운트 되거나 의존성이 변경될 때 실행
        // 설정한 타이머를 취소하여 메모리 누수방지
        return() => window.clearTimeout(timer);
    },[visible, onFinished]);

// visible =true, onFinished = 함수
// Effect 실행, 타이머 설정

// visible = false로 변경
// 클린업함수 실행(타이머취소)
// effect 재실행(타이머 설정 안 함)


    // 정상동작
    if(!visible){
        return null;
    }

  return (
    <div id='fix-animation' aria-hidden={!visible}>
        <h1 className='fix-text'>more than expected!</h1>
        <div className="text-blind">
            <div className="blind1"></div>
            <div className="blind2"></div>
        </div>
        <div className="circle-ani">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </div>
    </div>
  )
}
