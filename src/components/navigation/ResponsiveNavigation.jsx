/* eslint-disable react/prop-types */
import NavItems from "./NavItems"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const ResponsiveNavigation = ({ isResponsive, toggleResponsive }) => {
  return (
    <div className={`responsive${isResponsive ? "--close" : ""}`}>
      <div className="responsive__button" onClick={toggleResponsive}>
        {!isResponsive ? <RxCross2 /> : <GiHamburgerMenu />}
      </div>
      <ul className="responsive__listItems">
        <NavItems />
      </ul>
    </div>
  )
}

export default ResponsiveNavigation
