import airbnb from "./../../images/sponsorImg.png"
import slackImg from "./../../images/slackImg.png"
import stripeImg from "./../../images/stripeImg.png"
import airwallexImg from "./../../images/airwallexImg.png"
import spotifyImg from "./../../images/spotifyImg.png"
import bookingImg from "./../../images/bookingImg.png"
import gustoImg from "./../../images/gustoImg.png"
import coinbaseImg from "./../../images/coinbaseImg.png"
import SponsorBox from "./SponsorBox"


const Sponsor = () => {
  return (
    <div className="sponsor-section">
      <h1 className="sponsor-heading" data-aos-duration="2000" data-aos="fade-left">
        200+ The fastest growing company use Finsy
      </h1>
      <p className="sponsor-text" data-aos="fade-left" data-aos-duration="2000">
        Many companies have tried using Finsy and they trust the safety of their
        money
      </p>
      <div className="sponsors" data-aos="fade-right" data-aos-duration="3000">
        <SponsorBox image={airbnb}/>            
        <SponsorBox image={slackImg}/>            
        <SponsorBox image={stripeImg}/>            
        <SponsorBox image={airwallexImg}/>            
        <SponsorBox image={spotifyImg}/>            
        <SponsorBox image={bookingImg}/>            
        <SponsorBox image={gustoImg}/>            
        <SponsorBox image={coinbaseImg}/>            
      </div>
    </div>
  )
}
export default Sponsor
