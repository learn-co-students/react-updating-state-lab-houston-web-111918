import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: { bitrate: 8, video: { resolution: "1080p" } }
  };

  handleBitrateClick = () => {
    let settings = Object.assign({}, this.state.settings);
    settings.bitrate = 12;
    this.setState({
      settings
    });
  };

  handleResolutionClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { ...this.state.settings.video, resolution: "720p" }
      }
    });
  };

  render() {
    return (
      <div>
        <button>
          <label id="1" className="bitrate" onClick={this.handleBitrateClick}>
            Bitrate: {this.state.settings.bitrate}
          </label>
        </button>

        <button>
          <label
            id="2"
            className="resolution"
            onClick={this.handleResolutionClick}
          >
            Resolution:{this.state.settings.video.resolution}
          </label>
        </button>
      </div>
    );
  }
}
