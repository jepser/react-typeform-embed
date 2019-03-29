import React from 'react'
import PropTypes from 'prop-types'

import withTypeformEmbed from './with-typeform-embed'

export class TypeformEmbed extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount () {
    const { typeformEmbed } = this.props
    typeformEmbed.makeWidget(this.ref.current, this.props.typeformUrl)
  }
  render () {
    return (
      <div ref={this.ref} style={{ height: '100%', width: '100%' }} />
    )
  }
}

TypeformEmbed.propTypes = {
  typeformEmbed: PropTypes.object,
  typeformUrl: PropTypes.string.isRequired,
}

export default withTypeformEmbed(TypeformEmbed)
