import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <div classNameName='conatiner3'>
        <div className="about_header">

          <h1>#Know us</h1>
          <h6>Who we are, what we do</h6>
        </div>
        <div className="about_info">


        </div>
        <div className="about_p">
          <p>With the trendiest, freshest, and most unique gadgets from across India and the world,
            hayat store invites you to express your personal style fearlessly,
            and with a confidence and optimism that cannot be easily shaken</p>
        </div>
        <div className="about_details">
          <div className="about_p1">
            <h1>Hayat store</h1>
            <p>
              Hayat store is our private label – that’s designed by us, and owned by you. If you’re
              looking for head-turning styles that are one-of-a-kind, hayat store OWN is what you
              should stock up on</p>

          </div>
          <div className="about_p1">
            <h1>Exclusive International Labels</h1>
            <p>We bring you the trendiest and most exclusive brands from around the world to
              your hands. Forget scouring the net for what’s hot globally, we’ve got you
              covered.</p>
          </div>
        </div>

        <div className="about_p2">
          <p>Why let a world that constantly questions your tech choices and personal preferences get the upper hand, anyway?

            So the next time someone says, "Oh, that gadget is too advanced for you," or "Are you sure you need something so expensive?" or even, "Maybe you should stick to something simpler," go ahead and choose exactly what suits your needs and ambitions. When it comes to exploring innovation and personalizing your tech experience, there should never be any regrets.
          </p>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`


  .about_header {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(../images/banner.png);
    width: 100%;
    height: 40vh;
    background-size: cover;
    color: #e9ecee;
}
    h6{
    font-size:20px;
    }
    .about_info {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(../images/new.png);
    padding: 14px;
    width: 100%;
    height: 40vh;
    background-size: cover;
    margin-top: 50px;
    margin-bottom: 50PX;
}
.about_details {

    display: flex;
    align-items: center;
    justify-content: space-between;
}


.about_p P,
.about_p2  {
    margin-top: 50px;
    text-align: center;
    padding: 45px;
    background-color: #4b5f7b;
}


.about_p1 p {
    padding-top: 35px;
    padding-left: 35px;
    padding-right: 35px;
}
.about_p1 h1 {
    font-size:25px;
    padding-top: 35px;
    padding-left: 35px;
    padding-right: 35px;
}



`;

export default About;