import React, { Component } from 'react'

const searchContext = React.createContext()

export const Consumer = searchContext.Consumer
export const Provider = searchContext.Provider

class SearchProvider extends Component {
  state = {
    searchValue: ''
  }

  render() {
    const Provider = searchContext.Provider
    return(
      <Provider value={this.state.searchValue}>
        {this.props.children}
      </Provider>
    )
  }
}

export default SearchProvider