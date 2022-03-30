import React, { useState, useEffect } from 'react';
import InputForm from '../../components/input'
import styled from 'styled-components'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccessPhoto from '../../components/accessPhoto';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";
import { useFocusEffect } from '@react-navigation/native';

const LoginProfilScreen = ({ navigation }) => {

    const [user, setUser] = useState({})
    const [token, setToken] = useState("")



    useEffect(() => {
        AsyncStorage.getItem('Token').then((res) => {
            setToken(res);
        }, []);
    })

        useFocusEffect(() => {
            AsyncStorage.getItem('Token').then((res) => {
                setToken(res);
            })
        })
    

    const Submit = () => {
        axios
            .post('https://easy-login-api.herokuapp.com/users/login', {
                username: user.username,
                password: user.password
            })
            .then(async (data) => {
                try {
                    const value = data.headers["x-access-token"]
                    console.log('value')
                    console.log(value)
                    if (value !== null) {
                        await AsyncStorage.setItem('Token', data.headers["x-access-token"]); //met croché car - pas accepté
                    }
                }
                catch (e) {
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    const logout = () => {
        AsyncStorage.clear();
    }


    return (

        !token ? (

            <ScrollView>

                <ViewConnection>
                    <TitleConnection>AUTHENTIFICATION</TitleConnection>
                    <Text></Text>
                    <TextConnection>IDENTIFIANT</TextConnection>
                    <InputForm
                        name="username"
                        placeholder="username"
                        onChangeText={(text) => {
                            setUser({ ...user, username: text })
                            console.log(user)
                        }}
                    />
                    <Text></Text>
                    <TextConnection>MOT DE PASSE</TextConnection>
                    <InputForm
                        name="password"
                        placeholder="*****"
                        type="password"
                        onChangeText={(text) => {
                            setUser({ ...user, password: text })
                            console.log(user)
                        }
                        }
                    />
                    <Text></Text>
                    <ButtonConnect
                        onPress={(e) => {
                            Submit(e)
                            navigation.navigate("Home")
                            showMessage({
                                message: "Vous êtes connectés",
                                type: "info",
                            });

                        }}
                    >
                        <TextConnect>SE CONNECTER</TextConnect>
                    </ButtonConnect>
                </ViewConnection>
                
            </ScrollView>


        ) : <View>

            <ViewTitle>
                <TextTitle>Profil</TextTitle>
            </ViewTitle>

            <AccessPhoto />

            <ViewProfil>
                <TextProfil>Melly LUCAS</TextProfil>
                <TextProfil>melly.lucas32@yahoo.fr</TextProfil>
                <TextProfil>23 ans</TextProfil>
                <TextProfil>26 Novembre 1998</TextProfil>
                <TextProfil></TextProfil>
                <TextProfil></TextProfil>
                <TextProfil></TextProfil>
                <TouchableOpacity onPress={() => {
                    logout()
                    navigation.navigate("Home")
                }}>
                    <TextDeconnect>Se déconnecter</TextDeconnect>
                </TouchableOpacity>
            </ViewProfil>

        </View>
    );
};

const ButtonConnect = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background-color: white;
`

const TextConnect = styled.Text`
margin-top:auto;
margin-bottom:auto;
    color: #013252;
    text-align: center;
`

const ViewProfil = styled.View`
margin-top: 30px;
width:100%;
height:100%;
    background-color: #013252;
`

const TextTitle = styled.Text`
text-align: center;
text-transform : uppercase;
font-size: 28px;
color:white;
margin-top:auto;
margin-bottom:auto;
letter-spacing: 3px;
`

const TitleConnection = styled.Text`
    color: white;
    text-align: center;
    font-size: 18px;
`
const TextConnection = styled.Text`
    color: white;
    font-size: 12px;
`

const TextProfil = styled.Text`
    color: white;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
`

const TextDeconnect = styled.Text`
    color: white;
    font-size: 14px;
    margin-top: 20px;
    text-align: right;
    margin-right: 20px;
`

const ViewTitle = styled.View`
    background-color: #013252;
    height:50px;
    width:100%;
`

const ViewConnection = styled.View`
border: 2px solid  #013252;
padding: 20px;
background-color: #013252;
width:250px;
height: 300px;
margin-left:auto;
margin-right: auto;
margin-top:150px;
border-radius: 20px;
`



export default LoginProfilScreen;
