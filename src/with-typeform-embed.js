import React, { Component } from 'react'
import PropTypes from 'prop-types'

function withTypeformEmbed (WrappedComponent) {
  return class extends Component {
    state = {
      loaded: false,
      api: null,
    }
    componentDidMount () {
      const typeformEmbed = require('@typeform/embed')

      this.setState({
        loaded: true,
        api: typeformEmbed,
      })
    }

    render () {
      const { loaded, api } = this.state
      return loaded && <WrappedComponent {...this.props} typeformEmbed={api} />
    }
  }
}

export default withTypeformEmbed
