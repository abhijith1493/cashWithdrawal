// Write your code here
import './index.css'

const DenominationItem = props => {
  const {list, updateBalance} = props

  const calculate = () => {
    updateBalance(list.value)
  }
  return (
    <li>
      <button className="button" onClick={calculate} type="button">
        {list.value}
      </button>
    </li>
  )
}
export default DenominationItem
