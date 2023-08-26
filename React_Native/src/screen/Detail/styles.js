import { StyleSheet } from 'react-native'
import { colors } from '../../util/colors'

export const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.white
    },

    imgStyle: {
        height: 450,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.9)'

    },

    overlayText: {
        marginTop: 170
    },

    imgTitle: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        color: colors.white
    },

    ticketsBtn: {
        marginTop: 15
    },

    tailerBtn: {
        marginTop: 10
    },

    wrapper: {
        paddingHorizontal: 40
    },

    overviewTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },

    descTxt: {
        color: colors.text2,
        fontSize: 18,
        marginTop: 10
    }

})