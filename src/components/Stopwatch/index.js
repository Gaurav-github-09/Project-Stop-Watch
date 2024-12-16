// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, timerOn: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startClicked = () => {
    this.intervalId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {minutes, seconds} = this.state

    if (seconds === 60) {
      this.setState({minutes: minutes + 1, seconds: 0})
    } else {
      this.setState(prev => ({seconds: prev.seconds + 1, timerOn: true}))
    }
  }

  stopClicked = () => {
    clearInterval(this.intervalId)
    this.setState(prev => ({seconds: prev.seconds + 1, timerOn: false}))
  }

  resetClicked = () => {
    clearInterval(this.intervalId)
    this.setState({timerOn: false, minutes: 0, seconds: 0})
  }

  render() {
    const {timerOn, minutes, seconds} = this.state

    const minToShow = minutes > 9 ? minutes : `0${minutes}`

    const secToShow = seconds > 9 ? seconds : `0${seconds}`

    return (
      <div className="bgCont">
        <h1 className="head">Stopwatch</h1>
        <div className="card">
          <div>
            <span className="forspan">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              Timer
            </span>
            <h1 className="para">
              {minToShow}:{secToShow}
            </h1>
          </div>
          <div className="buttons">
            <button
              disabled={timerOn}
              onClick={this.startClicked}
              className="start"
              type="button"
            >
              Start
            </button>
            <button onClick={this.stopClicked} className="stop" type="button">
              Stop
            </button>
            <button onClick={this.resetClicked} className="reset" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
