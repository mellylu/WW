import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image, FlatList } from 'react-native'
import styled from 'styled-components'
import Logo from '../../components/logo'
import Middle from '../../components/middle';
import Icon3 from '../../images/icon3.jpeg';
import Icon2 from '../../images/icon2.jpeg';
import Icon1 from '../../images/icon1.jpeg';
import Icon4 from '../../images/icon4.jpeg';
import Icon5 from '../../images/icon5.jpeg';
import Icon6 from '../../images/icon6.jpeg';
import ChoiceButton from '../../components/choiceButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({ navigation }) => {

  console.log(AsyncStorage.getItem("Token"))

  return (
    <>

      <Logo />
      
      <Middle>

        <ChoiceButton
          text1="Assortir un vin selon son plat"
          text2="Assortir un plat selon un vin"
          img1={Icon1}
          img2={Icon2}
          onPress2={() => { navigation.navigate("ChoiceWineScreen") }}
        />

        <ChoiceButton
          text1="Utiliser un vin dans sa préparation"
          text2="Se documenter"
          img1={Icon3}
          img2={Icon4}
        />

        <ChoiceButton
          text1="Offrir un cadeau"
          text2="Partenaires"
          img1={Icon5}
          img2={Icon6}
        />

      </Middle>
    </>
  );
}

const ViewColor = styled.View`
  background-color: white;
`



export default HomeScreen;