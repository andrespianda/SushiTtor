import React, { Component } from "react";
import '../loading/loading.css'

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: false
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.show !== this.state.show) {
        this.setState({show: nextProps.show})
        
    }
  }
  render() {
    return (
      <>
      { this.state.show ? (
      <div id="loading-backdrop">
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      ) : null 
      }
    </>
    );
  }
}
