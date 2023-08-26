import React, {useState} from 'react';
import { Image } from 'react-native';


export default function MyImage(props) {
// console.log(props.source)

  return (
  	
        <Image
            {...props}
            style={props.style}  
            source={props.source && props.source.uri ? props.source : require("../../assets/imgs/loading.png")}
            // defaultSource={ require("../../assets/imgs/loading.png") }
            // resizeMode={'stretch'}
            // onError={()=> {console.log("Error: ", noImage); setSource(noImage)}} 
        />
    
  );
}





