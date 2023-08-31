/* eslint-disable react/prop-types */

const MediumBox = ({
  MainText,
  SubText,
  img,
  icon,
  animation,
  animDuration,
}) => {
  return (
    <div
      className="medium-box"
      data-aos={animation}
      data-aos-duration={animDuration}
    >
      <div className="medium-box__text">
        <div className="medium-box__icon">{icon}</div>
        <h2>{MainText}</h2>
        <p>{SubText}</p>
      </div>
      <div className="medium-box__image">
        <img src={img} alt={img} />
      </div>
    </div>
  )
}
export default MediumBox
