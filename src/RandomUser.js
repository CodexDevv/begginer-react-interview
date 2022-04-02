import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function RandomUser() {

  const [data, setData] = useState([])

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
      <button onClick={() => {
        axios.get("https://randomuser.me/api")
        .then((res) => {
          // console.log(res.data.results[0])
          setData(res.data.results[0])
        })
        .catch(err => {
          console.error(err)
        })
      }}>Get Data</button>
      <br />
      <br />
      <br />
      <img src={data.picture.large} placeholder='profile-pic'/>
      <h1>{data.name.first} {data.name.last}</h1>
    </div>
  )
}

export default RandomUser