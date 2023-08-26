import { StyleSheet } from 'react-native'
import { colors } from '../../util/colors'

export const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: colors.white
    },

    container: {
        flex: 1,
        backgroundColor: colors.gray,
        // paddingTop: 200
    },

    wrapper: {
        paddingHorizontal: 20
    }

})