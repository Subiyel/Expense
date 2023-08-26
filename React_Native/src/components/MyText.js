import React from 'react'
import { Text } from 'react-native'

const MyText = (props) => {
  return (
    <Text {...props} style={[  { fontFamily: 'Poppins' }, props.style]} />
  )
}

export default MyText