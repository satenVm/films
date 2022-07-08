import React, { useEffect } from 'react'
import { useState } from 'react'
export const MovieVideo = ({id}) => {
    const[video,setVideo] = useState('')
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=1d9153e543481708fd5de134abadc70f&language=en-US`)
        .then((res) => res.json())
        .then(res => setVideo(res))
    },[])
    console.log(video);
  return (
    <div>MovieVideo</div>
  )
}