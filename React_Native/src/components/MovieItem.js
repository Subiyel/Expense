import React from 'react'
import { View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from '../util/colors'
import { MyImage, MyText } from '.'
import LinearGradient from "react-native-linear-gradient"

const MovieItem = (props) => {  console.log("MovieItem: ", props)
  return (
    <TouchableOpacity onPress={()=> props.onPress(props.item)} style={[styles.card, {...props.cardStyle}]}>
        <MyImage source={{ uri: props.imageUrl }} style={[styles.imgStyle, {...props.imgStyle}]} resizeMode={'stretch'} />
        <MyText numberOfLines={1} style={styles.title}>{props.title}</MyText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    card: {
        marginTop: 40,
        borderRadius: 8,
        width: '100%',
        height: 200,
        backgroundColor: 'rgba(0,0,0,.9)'
    },

    imgStyle: {
        
        height: 200,
        width: '100%',
        borderRadius: 8,
        opacity: 0.7
    },

    title: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        fontSize: 22.5,
        color: colors.white,
        fontWeight: '500',
        width: '80%'
    }

})

export default MovieItem