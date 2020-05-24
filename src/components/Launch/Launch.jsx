import React from 'react';
import './styles.css'

export class Launch extends React.Component {
  render() {
    return (
      <div className='launch'>
        <img alt="launch" src={this.props.banner} />
        <div className="content">
          <div className="info">
            <h1>{this.props.title}</h1>
            <h1>{this.props.launchDate}</h1>
          </div>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}