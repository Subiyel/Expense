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
    marginTop: 30,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },

  row: {
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
    fontSize: 24
  },

  loginLabel: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 20
  },

  tfInput: {
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.textInput,
    width: "100%",
    // borderWidth: 1,
    fontSize: 17,
    paddingVertical: 10,
    paddingRight: 16,
    paddingLeft: 60,
    color: colors.white,
    fontWeight: "bold"
  },
  
  eyeIconRight: {
    height: 35,
    width: 33,
    position: "absolute",
    right: 13,
    top: 13,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  eyeIconLeft: {
    height: 35,
    width: 33,
    position: "absolute",
    left: 13,
    top: 6,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  iconAbsolute: {
    tintColor: colors.white,
    position: 'absolute',
    left: 20,
    top: 18
  },

  forgotPassView: {
    paddingTop: 10,
    paddingRight: 10,
    alignSelf: 'flex-end'
  }


})