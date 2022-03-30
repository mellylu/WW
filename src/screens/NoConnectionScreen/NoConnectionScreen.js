import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import NoConnectInternet from '../../images/noConnectInternet.png';
import styled from 'styled-components';

const NoConnectionScreen = (props) => {
    return (
        <View>
            <ImageNoConnectInternet
                source={NoConnectInternet}
                resizeMode="contain"
            />
            <ButtonReload
                onPress={props.onCheck}>
                <TextReload>Reload Page</TextReload>
            </ButtonReload>
        </View>
    );
};

const ImageNoConnectInternet = styled.Image`
    margin-right: auto;
    margin-left: auto;
    width: 250px;
    height: 480px;
`

const ButtonReload = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background-color: #013252;
    margin-left: auto;
    margin-right: auto;
    
`

const TextReload = styled.Text`
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
`

export default NoConnectionScreen;