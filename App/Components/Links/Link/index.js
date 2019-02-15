import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { TouchableOpacity } from 'App/Components'

import s from './Styles'

export default class Link extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    uppercase: PropTypes.bool,
    centered: PropTypes.bool
  }

  render () {
    const { style = undefined, text, onPress, uppercase = true, centered = false } = this.props
    return (
      <View style={(centered) ? [s.centered, style] : style}>
        <TouchableOpacity onPress={onPress}>
          <Text style={s.text}>{(uppercase) ? text.toUpperCase() : text}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
