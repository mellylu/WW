import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavorisScreen from '../../screens/FavoriteScreen/FavoriteScreen';
import HomeStack from './homeStack';
import LoginProfilScreen from '../../screens/LoginProfilScreen/LoginProfilScreen';
import FlashMessage from "react-native-flash-message";
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont()

const Tab = createBottomTabNavigator();

const MainStack = () => {

    return (
        <>
                <Tab.Navigator screenOptions={{ headerShown: false }}>

                    <Tab.Screen
                        options={{
                            title: '',
                            tabBarIcon: ({ size, color }) => (<Icon name="home" color="black"
                                size={24} />)
                        }}
                        name="HomeStack"
                        component={HomeStack}
                    />
                    
                    <Tab.Screen
                        options={{
                            title: '',
                            tabBarIcon: ({ size, color }) => (<Icon name="heart" color="black"
                                size={24} />)
                        }}
                        name="FavorisScreen"
                        component={FavorisScreen}
                    />

                    <Tab.Screen
                        options={{
                            title: '',
                            tabBarIcon: ({ size, color }) => (<Icon name="user" color="black"
                                size={24} />)
                        }}
                        name="LogScreen"
                        component={LoginProfilScreen}
                    />

                </Tab.Navigator>
                <FlashMessage position="top" />
        </>
    );
};

export default MainStack;