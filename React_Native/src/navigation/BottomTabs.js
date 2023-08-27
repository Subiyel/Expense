import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../util/colors";
import * as Animatable from "react-native-animatable";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Home from "../screen/Home";
import Settings from "../screen/Settings";




import { MyText } from "../components";


const HomeScreenStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dummy Screen</Text>
      </View>
    );
  }

  function Media() {
    return (
      <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Media Screen</Text>
      </View>
    );
  }

  function More() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
        <Text>More Screen</Text>
      </View>
    );
  }



function DiscoverStack() {
 
    return (
      <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Group>
        <HomeScreenStack.Screen name="Home1" component={Home} />
      </HomeScreenStack.Group>

      <HomeScreenStack.Group  screenOptions={{ presentation: 'modal' }} >
        <HomeScreenStack.Screen name="SettingsModel" component={Settings}/>
      </HomeScreenStack.Group>
      </HomeScreenStack.Navigator>
);
}

function WatchStack() {
  return (
    <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Group>
      <HomeScreenStack.Screen name="Watch" component={Dashboard} />
      </HomeScreenStack.Group>
    </HomeScreenStack.Navigator>
  );
}

function MediaStack() {
  return (
    <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Screen name="ChatHistory" component={Dashboard} />
    </HomeScreenStack.Navigator>
  );
}

function MoreStack() {
    return (
      <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeScreenStack.Screen name="More" component={Media} />
      </HomeScreenStack.Navigator>
    );
  }


const TabArr = [
  {
    route: "Discover",
    label: "Discover",
    component: DiscoverStack,
    activeImg: require("../../assets/imgs/icons/dashboard.png"),
    activeIcon: "home",
    inActiveTintColor: colors.tabBarInActive,
    activeTintColor: colors.tabBarActive,
  },
  {
    route: "WatchTab",
    label: "Watch",
    component: WatchStack,
    activeImg: require("../../assets/imgs/icons/plus.png"),
    activeIcon: "home",
    inActiveTintColor: colors.tabBarInActive,
    activeTintColor: colors.tabBarActive,
  },
  {
    route: "MoreTab",
    label: "More",
    component: MoreStack,
    activeImg: require("../../assets/imgs/icons/chart.png"),
    activeIcon: "home",
    inActiveTintColor: colors.tabBarInActive,
    activeTintColor: colors.tabBarActive,
  },
];

function BottomTabs() {

  const customTabStyle = {
    height: 80,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 6,
    backgroundColor: colors.bottombarBG,
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: customTabStyle,
      }}
    >
      {TabArr.map((item, index) => { //console.log(item)
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={({ route }) => 
            
            ({

              tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""

              // console.log(routeName)
              if (routeName === 'Chatdfd') {
                return { display: "none" }
              }
              return customTabStyle
              })(route),
              
              tabBarShowLabel: false,
              // tabBarLabel:item.label,
            //   tabBarIcon: ({ color, focused }) => (
            //     <Icon name={item.activeIcon} color={color} size={25} />
            //   ),
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const TabButton = (props) => {
  const viewRef = useRef(null);
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  // console.log("TAB props: ", props)
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 1, rotate: "0deg" },
        1: { scale: 1.2, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.2, rotate: "360deg" },
        1: { scale: 1, rotate: "0deg" },
      });
    }
    // console.log(props)
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.animatedView}
      >
        <Image
          source={item.activeImg}
          style={{
            height: 25,
            width: 25,
            tintColor: focused ? colors.text : colors.tabBarInActive,
          }}
          resizeMode={"contain"}
        />
      </Animatable.View>
      {/* <MyText style={{
          color: focused ? colors.tabBarActive : colors.tabBarInActive,
      }}>{item.label}</MyText> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  animatedView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabs;
