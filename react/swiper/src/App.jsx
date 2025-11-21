import React from 'react'
import './App.css'
import BasicSlider from './components/BasicSlider'
import AutoplaySlider from './components/AutoplaySlider'
import FadeSlider from './components/FadeSlider'
import MultipleSlider from './components/MultipleSlider'
import ThumbnailSlider from './components/ThumbnailSlider'
import ResponsiveSlider from './components/ResponsiveSlider'
import CustomNavSlider from './components/CustomNavSlider'
import FontAwesomeSlider from './components/FontAwesomeSlider'
import ImageArrowSlider from './components/ImageArrowSlider'

export default function App() {
  return (
    <div className='container'>
      <h1>Swiper Slider 종류별 예제</h1>
      <section className="slider-section">
        <h2>1. 기본 슬라이더 (Basic Slider)</h2>
        <BasicSlider/>
      </section>
      <section className="slider-section">
        <h2>2. 자동 재생 슬라이더 (Autoplay Slider)</h2>
        <AutoplaySlider/>
      </section>
      <section className="slider-section">
        <h2>3. 페이드 슬라이더 (Fade Slider)</h2>
        <FadeSlider/>
      </section>
      <section className="slider-section">
        <h2>4. 다중 슬라이더 (Multiple Slider)</h2>
        <MultipleSlider/>
      </section>
      <section className="slider-section">
        <h2>5. 썸네일 슬라이더 (Thumbnail Slider)</h2>
        <ThumbnailSlider/>
      </section>
      <section className="slider-section">
        <h2>6. 반응형 슬라이더 (Responsive Slider)</h2>
        <ResponsiveSlider/>
      </section>
      <section className="slider-section">
        <h2>8. 커스텀 네비게이션 슬라이더 (Cusomt Navigation Slider)</h2>
        <CustomNavSlider/>
      </section>
      <section className="slider-section fontawesome-section">
        <h2>9. Font Awesome 화살표 슬라이더 (Font Awesome Arrows)</h2>
        <FontAwesomeSlider/>
      </section>
      <section className="slider-section fontawesome-section">
        <h2>10. 이미지 화살표 슬라이더 (Image Arrow Slider)</h2>
        <ImageArrowSlider/>
      </section>
    </div>
  )
}
