// Write your code here
import './index.css'

const DestinationItem = props => {
  const {DestinationDetails} = props
  const {name, imgUrl} = DestinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}
export default DestinationItem
