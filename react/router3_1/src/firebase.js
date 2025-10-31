// Firebase 설정 파일
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyDmo_i6u46SLRl6tebnymHaPBI5Gqmxo44",
  authDomain: "router3-1-firebase.firebaseapp.com",
  projectId: "router3-1-firebase",
  storageBucket: "router3-1-firebase.firebasestorage.app",
  messagingSenderId: "494337001673",
  appId: "1:494337001673:web:831d394307a887d3336518",
  measurementId: "G-K6ETBGKTGQ"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
