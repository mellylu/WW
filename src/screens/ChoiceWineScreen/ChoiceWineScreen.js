import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Middle from '../../components/middle';
import WhiteWine from '../../images/whiteWine.png';
import RedWine from '../../images/redWine.png';
import PinkWine from '../../images/pinkWine.png';
import ChoiceButton from '../../components/choiceButton';
import Logo from '../../components/logo';

const ChoiceWineScreen = ({ navigation }) => {

    const [typeVin, setTypeVin] = useState("")

    return (

        <View>

            <Logo />

            <Middle>

                <ChoiceButton
                    text1="Blanc"
                    text2="Rouge"
                    img1={WhiteWine}
                    img2={RedWine}
                    onPress1={() => {
                        setTypeVin("Blanc");
                        navigation.navigate({
                            name: "ChoiceFoodScreen",
                            params: { typeVin: 'Blanc' }
                        })
                    }}
                    onPress2={() => {
                        setTypeVin("Rouge");
                        navigation.navigate({
                            name: "ChoiceFoodScreen",
                            params: { typeVin: 'Rouge' }
                        })
                    }}
                />

                <ChoiceButton
                    text1="Rosé"
                    text2="Champagne"
                    img1={PinkWine}
                    img2={WhiteWine}
                    onPress1={() => {
                        setTypeVin('Rosé')
                        navigation.navigate({
                            name: "ChoiceFoodScreen",
                            params: { typeVin: 'Rosé' }
                        })
                    }}
                    onPress2={() => {
                        setTypeVin('Champagne')
                        navigation.navigate({
                            name: "ChoiceFoodScreen",
                            params: { typeVin: 'Champagne' }
                        })
                    }}
                />


            </Middle>

        </View>

    );
};


export default ChoiceWineScreen;