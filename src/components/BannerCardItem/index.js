// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <div className="container">
      <li className={className}>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </li>
    </div>
  )
}

export default BannerCardItem
