// eslint-disable-next-line react/prop-types
const SmallBox = ({ MainText, icon, animation, animDuration }) => {
  return (
    <div
      className="small-box"
      data-aos={animation}
      data-aos-duration={animDuration}
    >
      <div className="small-box__icon">{icon}</div>
      <div className="small-box__text">
        <p>{MainText}</p>
      </div>
    </div>
  )
}
export default SmallBox
