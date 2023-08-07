import {Component} from 'react'
import HistoryItem from '../HistoryItem'

import './index.css'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      historyList: props.initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: filteredHistory})
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachSuggestion =>
      eachSuggestion.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="header-wrapper">
          <div className="header-inner-wrapper">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search history"
                className="search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <div className="history-wrapper">
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map(eachItem => (
                <HistoryItem
                  key={eachItem.id}
                  historyItem={eachItem}
                  onDeleteHistory={this.onDeleteHistory}
                />
              ))
            ) : (
              <p className="no-result">There is no history to show</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default History
