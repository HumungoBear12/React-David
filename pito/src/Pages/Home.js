import React from 'react'
import {
  Link
} from "react-router-dom";

const home = () => {
  return (
    <div className="Home-Container">
        {/* <p>Professional Youtube/Tiktoker</p> */}
        <img src="https://wallpaper.dog/large/17051111.jpg" alt=""/>
        <h1>Chosen Rosen </h1>
        <div className="Flex-Home">
            <Link to="/socials"><button><h2>Socials</h2></button></Link>
            <Link to='/workouts'><button><h2>Workouts</h2></button></Link>
            <Link to="/insparations"><button><h2>Inspirations</h2></button></Link>
        </div>
    </div>
  )
}

export default home