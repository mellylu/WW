import React from 'react'
import { Text, View, TextInput, button } from 'react-native';
import styled from 'styled-components'

const Input = (props) => {

    return (
        <View>
            <InputForm
                name={props.name}
                value={props.value}
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                type={props.type}
                label={props.label}
            />
        </View>
    )
}


const InputForm = styled.TextInput`
    width: 200px;
    height: 40px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: white;
    color:#013252;
`


export default Input