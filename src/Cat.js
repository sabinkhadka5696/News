import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Cat() {
    const [post, setPost]=useState([])
    let {cid}=useParams()
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cid}&apiKey=20f18c9887b84dd8bf17048199b195c6`).then(res=>res.json()).then(data=>setPost(data.articles))
    },[])
    console.log(post)
  return (
    <>
     <div className='container py-5'>
            <h3>{cid}</h3>
            <div className='row'>
        {post.map((a)=>(
            <div className='col-lg-4'>
                <div className='card'>
                <img src={a.urlToImage} alt={a.title} className='w-100'></img>
                <div className='card-body'>
                <p>{a.title}</p>
                </div>
            </div>
            </div>
            
        ))}
        </div>
        </div>
    </>
  )
}

export default Cat