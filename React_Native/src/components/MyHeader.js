import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from '../util/colors'
import { MyText } from '.'

const MyHeader = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
        <MyText style={styles.title}>Watch</MyText>

        <TouchableOpacity onPress={()=> props.onPress() } style={styles.searchTouch}>
            <Image style={styles.searchIcon} source={ require('../../assets/imgs/icons/Search.png') } />
        </TouchableOpacity>

    </View>
    </View>  
  )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 22,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '500'
    },

    searchIcon: {
        height: 24,
        width: 24
    },

    searchTouch: {
        paddingVertical: 20,
        paddingHorizontal: 4,
    }
})

export default MyHeader