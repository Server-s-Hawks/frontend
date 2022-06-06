import React from 'react'
import TopBar from '../../components/Topbar/TopBar'
import "./Home.css"
import HomeCard from './HomeCard'
import img1 from '../../img/99x.png'
import img2 from '../../img/wso2.png'
import { Link } from 'react-router-dom'

const arr = [{image:img2},{image:img1}];

const Home = () => {
  return (
    <>
    <div className='home'>
        {arr.map((card)=><HomeCard image={card.image} />)}
    </div>
      <div className="table">
      </div>
    </>
  )
}

export default Home