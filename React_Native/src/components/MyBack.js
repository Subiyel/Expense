import React from 'react';
import {  StyleSheet, TouchableOpacity, View, Platform, Image } from 'react-native';
import { colors } from '../util/colors';
import  MyText from './MyText';

export default function MyBack(props) {

  return (
  	<TouchableOpacity style={[styles.container,{...props.Style}]} onPress={()=> props.goBack()}>

        <Image style={styles.img} source={ require('../../assets/imgs/icons/back.png') } />
       
        <MyText {...props} style={[ styles.label , props.labelStyle ]}>
            Watch
        </MyText>

    </TouchableOpacity>
  );
  }


  const styles = StyleSheet.create({
    container:{
        width: 50,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 65
        // justifyContent: 'space-between',
    },
    img: {
        //  marginTop: 62, 
         height: 30, 
         width: 30 
    },
    label: {
        fontSize: 16, 
        color: colors.white,
        marginLeft: 2
    }
  });

