import { StyleSheet } from 'react-native'
import { colors } from '../../util/colors'

export const styles = StyleSheet.create({

    
  container: {
    flex: 1,
    backgroundColor: colors.container,
  },

  containerWrapper: {
    marginHorizontal: 25,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    marginTop: 30
  },

  transactionsLbl: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text
  },

  viewAllLbl: {
    fontSize: 13,
    color: colors.text2
  }

})