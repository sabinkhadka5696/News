import React from 'react'
import Slick from '../slick/Slick'
import News from '../News'

function Home() {
  return (
    <>
    <Slick/>
    <News title="General"/>
    <News title="Business"/>
    <News title="Technology"/>
    <News title="Sports"/>    
    </>
  )
}
export default Home