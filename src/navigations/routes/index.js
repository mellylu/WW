import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './mainStack';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator()

const Routes = () => {

    return (
        <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='LoginStack' component={LoginStack} /> */}
          <Stack.Screen name='MainStack' component={MainStack} />
        </Stack.Navigator>
        <FlashMessage position='top' />
      </NavigationContainer>
    );
};


export default Routes;