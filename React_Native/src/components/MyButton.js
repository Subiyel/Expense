import React from 'react';
import { Text, Platform, View, Image, TouchableOpacity } from 'react-native';
import { colors } from '../util/colors';

export default function MyButton(props) {
  return (
  	<TouchableOpacity
    //  rippleColor={props.rippleColor}
    //  onPress={()=> {  ReactNativeHapticFeedback.trigger(hapticTriggerType, options); props.onPress()}}
     onPress={() => props.onPress() }
     disabled={ props.isLoading } 
  	 style={[
      { 
      backgroundColor: 'white', 
      width: '70%', 
      padding: 15, 
      borderRadius: 4, 
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: colors.button, 
      alignSelf: 'center',
      }, 
      props.buttonStyle ]}
  	>
      { props.isLoading ?
        <Image style={{ width: 40, height: 25, }}  source={ require('../../assets/imgs/loader.gif') } />
        :
    		<Text style={[{ textAlign: 'center', color: '#FFF', fontSize: 20 }, props.labelStyle ]}>{props.label}</Text>
      }
    </TouchableOpacity>
  );
}





