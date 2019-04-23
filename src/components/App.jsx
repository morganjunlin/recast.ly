import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    }

    this.videosClickHandler = this.videosClickHandler.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      query: 'old town road',
      max: 5
    }, (data) => {
      this.setState({
        videos: data.items,
        video: data.items[0]
      })
    }) 
  }

  videosClickHandler(video) {
    this.setState({ video })
  }

  searchClickHandler(query) {
    this.props.searchYouTube({
      key: YOUTUBE_API_KEY,
      query: query,
      max: 5
    }, (data) => {
      this.setState({
        videos: data.items,
        video: data.items[0]
      })
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchClickHandler={this.searchClickHandler}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videosClickHandler={this.videosClickHandler} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
