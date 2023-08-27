import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from '../util/colors'
import { MyText } from '.'

const MyHeader = ({name, onSettingsPress}) => {
  return (
    <View style={styles.container}>
    <View style={styles.row}>
        <View style={styles.row}>
        <Image style={styles.personIcon} source={ require('../../assets/imgs/person.webp') } resizeMode={'contain'} />
        <View style={styles.labelView}>
            <MyText style={styles.welcome}>Welcome!</MyText>
            <MyText style={styles.title}>{name}</MyText>
        </View>
        </View>

        <TouchableOpacity onPress={()=> onSettingsPress() } style={styles.settingsTouch}>
            <Image style={styles.settingsIcon} source={ require('../../assets/imgs/icons/settings.png') } />
        </TouchableOpacity>

    </View>
    </View>  
  )
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 22,
        marginTop: 20,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    labelView: {
        marginLeft: 10
    },

    welcome: {
        fontSize: 12,
        color: colors.text2,
        marginLeft: 2
    },

    title: {
        color: colors.text,
        fontSize: 17,
        fontWeight: '500'
    },

    personIcon: {
        height: 35,
        width: 35
    },

    settingsIcon: {
        height: 22,
        width: 22,
        tintColor: colors.text2
    },

    settingsTouch: {
        backgroundColor: colors.white,
        borderRadius: 7,
        paddingVertical: 7,
        paddingHorizontal: 7,
    }

})

export default MyHeader