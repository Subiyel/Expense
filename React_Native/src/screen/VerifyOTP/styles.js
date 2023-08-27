import { StyleSheet } from 'react-native'
import { colors } from '../../util/colors'

export const styles = StyleSheet.create({

    
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  containerWrapper: {
    marginHorizontal: 25,
  },

  linearGradient: {
    flex: 1,
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
  },

  row: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  row1: {
    marginTop: 20,
  },


  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
  },

  loginLabel: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20
  },

  otp: {
    height: 55,
    width:  50,
    fontSize: 25,
    borderWidth: 2,
    borderColor: colors.text,
    color: '#222',
    textAlign: 'center',
    borderRadius: 7,
    marginLeft: Platform.OS == "ios" ? 0 : 4
  },

  otpFilled: {
    height: 60,
    width:  52,
    borderWidth: 2,
    borderColor: colors.lime,
    color: '#222',
    fontSize: 25,
    textAlign: 'center',
    borderRadius: 7,
    marginLeft: Platform.OS == "ios" ? 0 : 4
  },

  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 46,
  },

})