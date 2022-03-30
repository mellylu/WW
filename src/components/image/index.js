import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components'

const ImageIcon = (props) => {
    return (
        <View>
            <Icon
                source={props.source}
            />
        </View>
    );
};

const Icon = styled.Image`
margin-left: auto;
margin-right: auto;
`

export default ImageIcon;