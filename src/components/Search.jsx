import _ from '../node_modules/lodash/lodash.js'

class Search extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      query: ''
    }
    
    this.queryHandler = this.queryHandler.bind(this);
    this.debounce = this.debounce.bind(this);
  }

  queryHandler = _.debounce((e) => {
      this.setState({
        query: e.target.value
      }) 
    }, 500);

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={(e) => this.queryHandler(e)} className="form-control" type="submit" />
        <button onClick={() => this.props.searchClickHandler(this.state.query)} className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
