import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from '../util/colors'
import { MyText } from '.'
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";


const MyCard = (props) => {
  return (
    <LinearGradient colors={[ colors.gradient1, colors.gradient2]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.linearGradient}>

        <MyText style={styles.title1}>Total Balance</MyText>
        <View style={styles.row}>
        <MyText style={styles.currency}>$</MyText>
        <MyText style={styles.amount}>48000</MyText>
        </View>

        <View style={styles.row1}>

            <View style={styles.row}>
                <Icon name="arrow-down" size={25} color={colors.green} />
                <View style={styles.amountsView}>
                    <MyText style={styles.incomeTxt}>Income</MyText>
                    <MyText style={styles.incomeAmt}>2,500</MyText>
                </View>
            </View>


            <View style={styles.row}>
                <Icon name="arrow-up" size={25} color={colors.red} />
                <View style={styles.amountsView}>
                    <MyText style={styles.incomeTxt}>Income</MyText>
                    <MyText style={styles.incomeAmt}>2,500</MyText>
                </View>
            </View>

        </View>

    </LinearGradient>

  )
}

const styles = StyleSheet.create({

    linearGradient: {
        marginTop: 30,
        height: 200,
        width: 'auto',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        marginHorizontal: 20
      },
    row: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row1: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    title1: {
        textAlign: 'center',
        marginTop: 20,
        color: colors.white
    },

    currency: {
        fontWeight: 'bold',
        fontSize: 32,
        color: colors.white
    },

    amount: {
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 5,
        color: colors.white
    },

    amountsView: {
        marginLeft: 7
    },

    incomeTxt: {
        color: colors.white,
        fontSize: 12
    },

    incomeAmt: {
        color: colors.white,
        fontSize: 15,
        fontWeight: 'bold'
    }


})

export default MyCard