import React from 'react'
import { Text, View, Button } from 'react-native';
import ImageIcon from '../image'
import styled from 'styled-components'

const ChoiceButton = (props) => {
    return (
        <Menu>
            <MenuLigne>
                <Square onPress={props.onPress1}>
                    <ImageIcon source={props.img1} />
                    <TextMenu>{props.text1}</TextMenu></Square>
                <Square secondary onPress={props.onPress2}>
                    <ImageIcon source={props.img2} />
                    <TextMenu>{props.text2}</TextMenu>
                </Square>
            </MenuLigne>
        </Menu>
    )
}


const Square = styled.TouchableOpacity`
width: 40%;
margin-top: 30px;
margin-right: 10px;
margin-left:10px;
background-color: #F6F6F6;
`

const Menu = styled.View`
align-items: center;
`

const MenuLigne = styled.View`
margin-top: 15px;
flex-direction :row ;
`
const TextMenu = styled.Text`

text-align: center;
`
export default ChoiceButton