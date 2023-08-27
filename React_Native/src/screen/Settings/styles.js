import { StyleSheet } from 'react-native'
import { colors } from '../../util/colors'

export const styles = StyleSheet.create({

    
  container: {
    flex: 1,
    backgroundColor: colors.container,
  },

  containerWrapper: {
    marginHorizontal: 25,
    marginTop: 20
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    marginTop: 30
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }


})