import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Single() {
    const [post,setPost]=useState([])
    let {id}=useParams()
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${id}&apiKey=20f18c9887b84dd8bf17048199b195c6`).then(res=>res.json()).then(data=>setPost(data))
    },[])
    console.log(post)
  return (
    <>
      <h1>{post.id}</h1>
      <p>{post.description}</p>
    </>
  )
}
