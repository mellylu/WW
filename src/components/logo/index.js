import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components'
import Logo from '../../images/Logo.jpeg'

const LogoApp = () => {
    return (
        <Header>
            <ImageLogo source={Logo}
            />
        </Header>
    );
};

const Header = styled.View`
  width: 100%;
  height: 25%;
`

const ImageLogo = styled.Image`
    width : 180px;
    height : 130px;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
`

export default LogoApp;