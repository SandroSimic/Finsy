import { HiOutlineMailOpen } from "react-icons/hi"

const Newsletter = () => {
  return (
    <section className="newsletter-section" data-aos="zoom-in-down">
      <h1>Save smart. Achieve more.</h1>
      <div className="newsletter">
        <div className="newsletter__container">
          <div className="newsletter__intro">
            <div className="newsletter__icon">
              <HiOutlineMailOpen />
            </div>
            <div className="newsletter__text">
              <h2>Keep up with the latest</h2>
              <p>
                Join our newsletter to stay up to date on features and releases
              </p>
            </div>
          </div>
          <div className="newsletter__input">
            <div className="newsletter__inputText">
              <h3>Stay up to date</h3>
              <input type="text" placeholder="Enter your email" />
              <p>
                by subscribing you agree with our <span>Privacy Policy</span>
              </p>
            </div>
            <button className="btn btn-yellow newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
