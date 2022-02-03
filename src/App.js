import Form from './Components/Form/Form'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Information from './Components/Information/Information'
import axios from 'axios'
import React,{useEffect, useState} from 'react'
function App() {
  const [city,setState] = useState({})
  const getDataFromServer =(city)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=774b22f90c94bef2c34e6a0398b20a94`).then((res)=>{
      console.log(res.data)
      setState(res.data)
    }, ()=>{
      alert("Data Not Found")
    })
  }
  return (
    <div className="App">
      <h2 className="text-white pt-5">Weather App</h2>
      <Form getDataFromServer={getDataFromServer}/>
      {Object.keys(city).length===0? <div></div>:<Information info={city}/>}
    </div>
  )
}

export default App