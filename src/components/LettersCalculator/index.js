import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', Count: 0}

  onChangeUserInput = event => {
    this.setState({
      searchInput: event.target.value,
      Count: event.target.value.length,
    })
  }

  render() {
    const {searchInput, Count} = this.state

    return (
      <div className="background">
        <div className="items-container">
          <h1 className="heading">
            Calculate the
            <br />
            Letters you
            <br />
            enter
          </h1>
          <label className="para" htmlFor="inputBox">
            Enter the phrase
          </label>
          <input
            type="text"
            className="inputStyle"
            placeholder="Enter the phrase"
            onChange={this.onChangeUserInput}
            value={searchInput}
            id="inputBox"
          />
          <p className="whiteCard">No.of letters: {Count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="calImage"
        />
      </div>
    )
  }
}

export default LettersCalculator
