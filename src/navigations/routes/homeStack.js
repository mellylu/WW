import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/HomeScreen/HomeScreen';
import ChoiceWineScreen from '../../screens/ChoiceWineScreen/ChoiceWineScreen';
import ChoiceFoodScreen from '../../screens/ChoiceFoodScreen/ChoiceFoodScreen';
import ResultScreen from '../../screens/ResultScreen/ResultScreen';
import DescriptionSheetScreen from "../../screens/DescriptionSheetScreen/DescriptionSheetScreen";
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import Croix from '../../images/croix.png';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home" component={Home}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ChoiceWineScreen"
                component={ChoiceWineScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ChoiceFoodScreen"
                component={ChoiceFoodScreen}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="ResultScreen"
                component={ResultScreen}
            />
            <Stack.Screen
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: { backgroundColor: '#013252' },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ImageCroix
                                source={Croix}
                            />
                        </TouchableOpacity>
                    )
                })}
                name="DescriptionSheetScreen"
                component={DescriptionSheetScreen}
            />

        </Stack.Navigator>
    );
};

const ImageCroix = styled.Image`
    height:40px;
    width:50px;
`

export default HomeStack;