/* eslint-disable react/prop-types */
import NavItems from "./NavItems"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

const Navbar = ({ toggleResponsive, isResponsive }) => {
  const handleClick = function () {
    toggleResponsive(!isResponsive)
  }

  return (
    <nav className="navigation">
      <h1 className="logo">Finsy</h1>
      <ul className="navigation__list">
        <NavItems />
      </ul>
      <div className="navigation__buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-full">Open Account</button>
      </div>
      <div className="navigation__responsive" onClick={handleClick}>
        {!isResponsive ? <RxCross2 /> : <GiHamburgerMenu />}
      </div>
    </nav>
  )
}
export default Navbar
