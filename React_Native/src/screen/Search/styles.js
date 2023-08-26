import { StyleSheet } from 'react-native'
import { colors } from '../../util/colors'

export const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.white
    },

    searchTextInput: {
        width: '92%',
        marginTop: 20,
        borderRadius: 25,
        alignSelf: 'center',
        paddingVertical: 18,
        paddingHorizontal: 48,
        backgroundColor: colors.gray
    },

    wrapper: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center'
        // flexWrap: 'wrap',
    },

    searchIcon: {
        position: 'absolute',
        top: 34,
        left: 30,
        height: 24,
        width: 24
    },

})