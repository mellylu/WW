import React from 'react'
import { Text, View, Button } from 'react-native';

const ButtonForm = (props) => {
    return (
        <View>
            <Button
                title={props.title}
                onPress={props.onPress}
            />
        </View>
    )
}

export default ButtonForm