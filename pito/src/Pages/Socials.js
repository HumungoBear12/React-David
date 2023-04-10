import React from 'react'

const Socials = () => {
  return (
    <div className="social-container">
        <h2 className="social-title">My Social Media Accounts</h2>
        <hr/>
        <div className="social-youtube">
          <div className="youtube-one">
            <h3>NEW VIDEO!!!!</h3>
            <hr/>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OLsX3cAy4WA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="youtube-two">
            <h2>Youtube Channel: Chosen_Rosen</h2>
            <hr/>
            <a href="https://www.youtube.com/@Chosen_Rosen"><button>Click here</button></a>
          </div>
        </div>
    </div>
  )
}

export default Socials