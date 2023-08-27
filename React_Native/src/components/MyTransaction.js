import React from 'react';
import {  StyleSheet, Image, View, TouchableOpacity, I18nManager } from 'react-native';
import  MyText from './MyText';
import {useTranslation} from 'react-i18next';
import { colors } from '../util/colors';


export default function MyTransaction({ onPressed, item }) {

  const {t, i18n} = useTranslation();
  const home = require("../../assets/imgs/items/home.png")
  const food = require("../../assets/imgs/items/food.png")
  const travel = require("../../assets/imgs/items/travel.png")
  const ticket = require("../../assets/imgs/items/ticket.png")


  return (
    <TouchableOpacity style={styles.row} onPress={()=>  onPressed() }>


        <View style={styles.row1}>

              <View style={styles.row2}>
                <View style={styles.picView}>
                <Image source={food} style={styles.profilePic}/>
                </View>
                <MyText style={styles.title} numberOfLines={1} >{item.name}</MyText>
              </View>

              <View style={styles.row4}>
                <MyText style={styles.amount} numberOfLines={1} >{item.amount}</MyText>
                <MyText style={styles.time} numberOfLines={1} >{item.time}</MyText>
              </View>

        </View>


    

    </TouchableOpacity>
  );
  }


  const styles = StyleSheet.create({

    row: {
      // overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 18,
        marginTop: 14,
        elevation: 2,
        backgroundColor: 'white',
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowRadius: 3,
        shadowOpacity: 0.2,
        marginHorizontal: 20
      },

      row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '100%'
      },

      row2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center', 
      },

      row3: {
        width: '55%',
        paddingLeft: 15,
        overflow: 'hidden'
      },

      

      picView: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center'
      },

      profilePic: {
        height: 25,
        width: 25,
      },

      title: {
        fontSize: 18,
        color: colors.text,
        fontWeight: 'bold',
        marginLeft: 10
      },

      amount: {
        fontSize: 16,
        textAlign: 'center'
      },

      time: {
        fontSize: 12,
        color: colors.text2,
        marginTop: 1,
        textAlign: 'center'
      },

      arrow: {
        marginRight: 5,
        height: 17,
        width: 17
      }

  });

