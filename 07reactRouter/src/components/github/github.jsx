import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //    fetch('https://api.github.com/users/vedant11-lab')
    //    .then(response => response.json())
    //    .then(data => {
    //      console.log(data)
    //      setdata(data)
    //    })
    // }, [])
  return (
    <div>
      <h1>GitHub Profile : {data.followers} </h1>
      <img src={data.avatar_url} alt="github profile pic" width="200px" />
    </div>
  )
}

export default Github

export const githubInfoLoaader = async ()=> {
    const response= await fetch('https://api.github.com/users/vedant11-lab')
    return response.json()
}
