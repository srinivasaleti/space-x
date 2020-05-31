import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import './styles.css'

export class LaunchView extends React.Component {

  state = {
    launch: {}
  }

  componentDidMount = () => {
    const flightNo = this.props.match.params.flight_number
    this.getLaunch(flightNo)
  }

  getLaunch = (flightNo) => {
    axios.get('https://api.spacexdata.com/v3/launches/' + flightNo).then((response) => {
      this.setState(
        { launch: response.data }
      )
    }).catch((error) => {
      console.log(error)
    })
  }

  launchAttribute = (title, key) => {
    const value = this.state.launch[key]
    return (
      <div className="attribute">
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    )
  }

  render() {
    console.log(this.state.launch)
    return (
      <div className="launch-view">
        {this.launchAttribute("Mission Name", "mission_name")}
        {this.launchAttribute("Flight Number", "flight_number")}
        {this.launchAttribute("Launch Date", "launch_date_local")}
        <p className='launch-description'>{this.state.launch.details}</p>
      </div>
    )
  }
}

export default withRouter(LaunchView);