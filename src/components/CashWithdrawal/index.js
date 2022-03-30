// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  balanceChecker = value => {
    const previous = this.state
    if (previous.balance === 0) {
      console.log('hai')
      this.setState({
        balance: 0,
      })
    } else {
      this.setState(pre => ({
        balance: pre.balance - value,
      }))
    }
  }

  render() {
    const {denominationsList} = this.props
    console.log(denominationsList)
    const name = 'Sarah Williams'
    const stateValue = this.state
    const a = name.slice(0, 1)
    return (
      <div className="wrapper">
        <div className="innerWprapper">
          <div className="wrapperProfile">
            <div className="s">{a}</div>
            <div className="sw">
              <h1>{name}</h1>
            </div>
          </div>
          <div className="yourBalance">
            <div>
              <p>Your Balance</p>
            </div>
            <div className="amtwp">
              <p className="amt">{stateValue.balance}</p>
              <p className="amtp">In Rupees</p>
            </div>
          </div>
          <div className="withdraw">
            <div>
              <p className="withdrawp">Withdraw</p>
            </div>
            <div>
              <p>CHOOSE SUM (IN RUPEES)</p>
            </div>
          </div>
          <div className="">
            <ul className="denominations-list">
              {denominationsList.map(each => (
                <DenominationItem
                  className="li"
                  list={each}
                  updateBalance={this.balanceChecker}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
