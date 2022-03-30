import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native"
import Middle from '../../components/middle';
import ChoiceButton from '../../components/choiceButton';
import Logo from '../../components/logo';
import Icon1 from '../../images/icon1.jpeg';

const ChoiceFoodScreen = ({ route, navigation }) => {
    const [categoryFood, setCategoryFood] = useState("")
    // const [z, setZ] = useState(route.params);

    const {
        typeVin
    } = route.params;

    return (
        <View>

            <Logo />

            <Middle>

                <ChoiceButton
                    text1="Apéritif"
                    text2="Entrée"
                    img1={Icon1}
                    img2={Icon1}
                    onPress1={() => {
                        setCategoryFood("Apéritif");
                        navigation.navigate({
                            name: "ResultScreen",
                            params: {
                                typeVin,
                                categoryFood: "Aperitif"
                            }
                        })
                    }}
                    onPress2={() => {
                        setCategoryFood("Entrée");
                        navigation.navigate({
                            name: "ResultScreen",
                            params: {
                                typeVin,
                                categoryFood: "Entrée"
                            }
                        })
                    }}
                />

                <ChoiceButton
                    text1="Plat"
                    text2="Dessert"
                    img1={Icon1}
                    img2={Icon1}
                    onPress1={() => {
                        setCategoryFood("Plat");
                        navigation.navigate({
                            name: "ResultScreen",
                            params: {
                                typeVin,
                                categoryFood: "Plat"
                            }
                        })
                    }}
                    onPress2={() => {
                        setCategoryFood("Dessert");
                        navigation.navigate({
                            name: "ResultScreen",
                            params: {
                                typeVin,
                                categoryFood: "Dessert"
                            }
                        })
                    }}

                />

            </Middle>

        </View>
    )
}

export default ChoiceFoodScreen;