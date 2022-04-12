import React from 'react';
import { NavigationContainer , useTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import { StatusBar } from 'native-base';
import { extendTheme, useColorMode } from 'native-base';
import MyTheme from '../Theme';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../screens/AccountScreen';
import GoodsScreen from "../screens/GoodsScreen";
import Good1Screen from '../screens/Good1Screen';

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WishScreen from '../screens/WishScreens';
import NoticeScreen from '../screens/NoticeScreen';

import booksData from "../json/books.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    const { colorMode } = useColorMode();
    return(
        <NavigationContainer theme={MyTheme}>
            <StatusBar
        barStyle={
          colorMode == "light" ? "dark-content" : "light-content"
        }
        backgroundColor={
          colorMode == "light" ? "white" : "black"
        }
      />
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
    const { colors } = useTheme();
  const { colorMode } = useColorMode();
    return(
        
        <Tab.Navigator
            initialRouteName='HomeStack'
            screenOptions={{
                headerShow: false,
            }}
        >
            <Tab.Screen
                name = "HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "首頁",
                    tabBarInactiveTintColor: colorMode == 'light' ? colors.light500 : 'gray',
                    tabBarActiveTintColor: colorMode == 'light' ? colors.primary700 : 'white',
                    tabBarStyle: { backgroundColor: colorMode == 'light' ? 'white' : 'black' },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-variant-outline" color={color} size={28} />),
                }}
            />
            <Tab.Screen
                name = "WishStack"
                component={WishScreen}
                options={{
                    headerShown: false,
                    title: "願望清單",
                    tabBarIcon:({ color }) => (
                        <MaterialCommunityIcons name="heart-outline" color={color} size={28} />),
                }}
            />
            <Tab.Screen
                name = "SearchStack"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    title: "搜尋",
                    tabBarIcon:({ color }) => (
                        <Feather name="search" color={color} size={24} />),
                }}
            />
            <Tab.Screen
                name = "NoticeStack"
                component={NoticeScreen}
                options={{
                    headerShown: false,
                    title: "通知",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell-outline" color={color} size={26} />),
                }}
            />
            <Tab.Screen
                name = "AccountStack"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    title: "我的帳戶",
                    tabBarIcon:({ color }) => (
                        <FontAwesome name="user-o" color={color} size={22} />),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = () => {
    const { colorMode } = useColorMode();
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "Homeeeee"
                component = {HomeScreen}
                options = {{
                    headerShadowVisible: false,
                    title: booksData.title,

                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        shadowOffset:{height: 0, width: 0},
                        backgroundColor: colorMode == 'light' ? 'white' : 'black',
                    },
                    headerTitleStyle: {
                        color: colorMode == 'light' ? 'black' : 'white',
                        fontWeight: '400',
                        fontSize: 20
                      },
                    headerLeft: () => (                        
                    <MaterialCommunityIcons
                        name={ 'magnify'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
                    headerRight: () => (                        
                    <MaterialCommunityIcons
                        name={ 'cart-outline'}
                        size={24}
                        color={"#fff"}
                    />   
                    ),
                }}
            />
            <Stack.Screen
                name="Detail"
                component={GoodsScreen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
                headerStyle: {
                    backgroundColor: colorMode == 'light' ? 'white' : 'black',
                },
                headerTitleStyle: {
                    color: colorMode == 'light' ? 'black' : 'white',
                    fontWeight: '400',
                    fontSize: 20
                }, 
          
                })}
            />

            <Stack.Screen
                name="Good1"
                component={Good1Screen}
                options={({ route }) => ({
                title: null,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: colorMode == 'light' ? 'black' : 'white',
                headerStyle: {
                    backgroundColor: colorMode == 'light' ? 'white' : 'black',
                },
                headerTitleStyle: {
                    color: colorMode == 'light' ? 'black' : 'white',
                    fontWeight: '400',
                    fontSize: 20
                }, 
          
                })}
            />




            
        </Stack.Navigator>
    );
};

export default Navigation;