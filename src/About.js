
import HeroSection from './components/HeroSection'
import { useProductContext  } from './context/productcontext'

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "Hayat E-commerce"
  }
  return (
    <>
      {myName}
      <HeroSection myData={data} />
      {/* <div className="about_header">

        <h1>#Know us</h1>
        <h6>Who we are, what we do</h6>
      </div>

      <div className="about_p">
        <div class="about_info">


        </div>
        <div class="about_p">
          <p>With the trendiest, freshest, and most unique styles from across India and the world,
            Eshoppers invites you to <br /> express your personal style fearlessly,
            and with a confidence and optimism that cannot be easily shaken</p>
        </div>




        <div class="about_p1">
          <h1>Eshoppers own</h1>
          <p>
            Eshoppers is our private label – that’s designed by us, and owned by you. If you’re <br />
            looking for head-turning styles that are one-of-a-kind, Shophere OWN is what you <br />
            should stock up on</p>

        </div>
        <div class="about_p1">
          <h1>Exclusive International Labels</h1>
          <p>We bring you the trendiest and most exclusive brands from around the world to <br />
            your wardrobe. Forget scouring the net for what’s hot globally, we’ve got you <br />
            covered.</p>
        </div>
      </div>
      <div class="about_p2">
        <p>Why let a world that loves to police your wardrobe and your expression get the upper hand, anyway? <br />

          So the next time someone says ‘Oh, that dress is too bold’ ‘Are you sure you’re the right size for
          this?’ <br />
          ‘Maybe you should pick a colour that suits you’ or ‘Act your age and wear something else’, go ahead and
          <br />
          do exactly what you please. When it comes to great style and personal expression, there should never be
          <br /> any regrets
        </p>
      </div> */}
    </>
  )
}

export default About