import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../util/colors";
import * as Animatable from "react-native-animatable";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Watch from "../screen/Watch";
import Search from "../screen/Search";
import Detail from "../screen/Detail";


import { MyText } from "../components";


const HomeScreenStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard Screen</Text>
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
        <HomeScreenStack.Screen name="Home1" component={Dashboard} />
      </HomeScreenStack.Navigator>
);
}

function WatchStack() {
  return (
    <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Group>
      <HomeScreenStack.Screen name="Watch" component={Watch} />
      <HomeScreenStack.Screen name="Detail" component={Detail} />
      </HomeScreenStack.Group>

      <HomeScreenStack.Group  screenOptions={{ presentation: 'modal' }} >
      <HomeScreenStack.Screen name="SearchModel" component={Search}/>
      </HomeScreenStack.Group>
    </HomeScreenStack.Navigator>
  );
}

function MediaStack() {
  return (
    <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeScreenStack.Screen name="ChatHistory" component={Media} />
    </HomeScreenStack.Navigator>
  );
}

function MoreStack() {
    return (
      <HomeScreenStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeScreenStack.Screen name="More" component={More} />
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
    route: "Watch",
    label: "Watch",
    component: WatchStack,
    activeImg: require("../../assets/imgs/icons/watch.png"),
    activeIcon: "home",
    inActiveTintColor: colors.tabBarInActive,
    activeTintColor: colors.tabBarActive,
  },
  {
    route: "Media",
    label: "Media",
    component: MediaStack,
    activeImg: require("../../assets/imgs/icons/media.png"),
    activeIcon: "home",
    inActiveTintColor: colors.tabBarInActive,
    activeTintColor: colors.tabBarActive,
  },
  {
    route: "More",
    label: "More",
    component: MoreStack,
    activeImg: require("../../assets/imgs/icons/more.png"),
    activeIcon: "home",
    inActiveTintColor: colors.tabBarInActive,
    activeTintColor: colors.tabBarActive,
  },
];

function BottomTabs() {

  const customTabStyle = {
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingBottom: 40,
    paddingTop: 6,
    backgroundColor: colors.primary,
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
  console.log("TAB props: ", props)
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: { scale: 1, rotate: "0deg" },
        1: { scale: 1.5, rotate: "360deg" },
      });
    } else {
      viewRef.current.animate({
        0: { scale: 1.5, rotate: "360deg" },
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
            tintColor: focused ? colors.tabBarActive : colors.tabBarInActive,
          }}
          resizeMode={"contain"}
        />
      </Animatable.View>
      <MyText style={{
          color: focused ? colors.tabBarActive : colors.tabBarInActive,
      }}>{item.label}</MyText>
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
