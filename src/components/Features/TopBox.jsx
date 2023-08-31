// eslint-disable-next-line react/prop-types
const TopBox = ({ MainText, SubText, img, icon, animation, animDuration }) => {
  return (
    <div
      className="top-box"
      data-aos={animation}
      data-aos-duration={animDuration}
    >
      <div className="top-box__text">
        <div className="icon">{icon}</div>
        <h2>{MainText}</h2>
        <p>{SubText}</p>
      </div>
      <div className="top-box__image">
        <img src={img} alt={img} className="top-box__img" />
      </div>
    </div>
  )
}
export default TopBox
