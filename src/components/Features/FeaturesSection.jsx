import cardImg from "../../images/credit-card.png"
import financeImg from "../../images/Finance.png"
import financeImg2 from "../../images/Finance2.png"

import { MdAnalytics, MdAttachMoney } from "react-icons/md"
import { FaMoneyBillWaveAlt, FaCoins, FaSmile } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

import TopBox from "./TopBox"
import MediumBox from "./MediumBox"
import SmallBox from "./SmallBox"
import { useEffect } from "react"

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="features-section">
      <h1>Feel the best experience with our features</h1>
      <div className="top-row">
        <TopBox
          MainText={"Custom and design your card, make it unique"}
          SubText={
            "Create a custom card that reflects your unique style and personality. Choose from a range of colors, patterns, and designs to customize the look of your card"
          }
          img={cardImg}
          icon={<MdAnalytics />}
          animation="fade-right"
          animDuration={1000}
        />
        <TopBox
          MainText={"Personalized your financial insights and goals"}
          SubText={
            "Track your spending patters, analyze income or expenses easily, and receive personalized recommendations to optimize your financial habits."
          }
          img={financeImg}
          icon={<FaMoneyBillWaveAlt />}
          animation="fade-left"
          animDuration={1500}
        />
      </div>
      <div className="middle-row">
        <MediumBox
          MainText={"Free transfer anywhere around the world"}
          SubText={
            "Experience the freedom of hassle-free money transfers with our free transfer admin finance app. Say goodbye to unnecessary fees and enjoy seamless transactions."
          }
          img={financeImg2}
          icon={<MdAttachMoney />}
          animation="zoom-out"
          animDuration={2000}
        />
      </div>
      <div className="bottom-row">
        <SmallBox
          MainText="Hold money in 30+ currencies"
          icon={<FaCoins />}
          animation={"fade-right"}
          animDuration={2000}
        />
        <SmallBox
          MainText="Subscriptions you control in one place"
          icon={<FaSmile />}
          animation={"fade-up"}
          animDuration={2000}
        />
        <div
          className="small-box"
          data-aos="fade-left"
          data-aos-duration={2000}
        >
          <p>Check our other product features</p>
          <button className="btn btn-outline small-box__button">
            View More <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default FeaturesSection
