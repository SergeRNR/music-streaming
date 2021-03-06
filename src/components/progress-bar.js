import React from 'react';
import PlaybackStore from 'stores/playback-store';

class ProgressBar extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      progress: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    PlaybackStore.addListener(this.onChange);
  }

  // componentWillUnmount () {
  //   PlaybackStore.removeChangeListener(this.onChange);
  // }

  onChange () {
    var playbackState = PlaybackStore.getState();
    this.setState({
      progress: 33
    });
  }

  render () {
    return (
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{width: this.state.progress + '%'}}></div>
      </div>
    );
  }
}

export default ProgressBar;
