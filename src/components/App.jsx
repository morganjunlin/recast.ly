import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: props.exampleVideoData,
      video: props.exampleVideoData[0]
    }

    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  handleVideoClick(idx) {
    this.setState({
      video: this.props.exampleVideoData[idx]
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleVideoClick={this.handleVideoClick} />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
