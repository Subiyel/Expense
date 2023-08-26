import * as React from 'react';
import { View, Text } from 'react-native';
import BottomTabs from './BottomTabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Dummy() {
  return (
    <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dummy Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown : false }}>
        
        
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;