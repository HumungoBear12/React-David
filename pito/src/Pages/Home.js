import React from 'react'
import image from '../IMG_6552.JPG'

const home = () => {
  return (
    <div className="Home-Container">
        {/* <p>Professional Youtube/Tiktoker</p> */}
        <img src={image} alt=""/>
        <h1>David Rosen's </h1>
        <div className="Flex-Home">
            <a href="https://www.tiktok.com/@chosen.rosen?is_from_webapp=1&sender_device=pc"><button><h2>Tiktok</h2></button></a>
            <a href=""><button><h2>Workouts</h2></button></a>
            <a href=""><button><h2>Youtube</h2></button></a>
        </div>
    </div>
  )
}

export default home