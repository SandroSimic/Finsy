import heroImg from "./../../images/heroImg.png"
import avatar2 from "./../../images/avatar2.png"
const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={heroImg} alt="heroImg" className="hero__img" />
      <div className="heroInfo">
        <div className="heroInfo__text">
          <h1>
            Control your <span>financial</span> <span>future</span> easily
          </h1>
          <p>
            From easy money management, to financial goals and investments. Open
            your account in a flash.
          </p>
        </div>
        <div className="heroInfo__buttons">
          <button className="btn btn-yellow">Open account</button>
          <button className="btn btn-outline">Generate your card</button>
        </div>
        <div className="heroInfo__users">
          <div className="heroInfo__icons">
            <img src={avatar2} alt="avatar1" />
            <img src={avatar2} alt="avatar2" />
            <img src={avatar2} alt="avatar3" />
          </div>
          <div className="heroInfo__userText">
            <h3>15 Million+</h3>
            <p>
              Trusted by million of satisfied users, our financial services have
              a real impact on people's lives
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
