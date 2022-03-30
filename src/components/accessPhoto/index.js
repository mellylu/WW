import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native'
import * as ImagePicker from "react-native-image-picker"
import styled from 'styled-components';
import Plus from '../../images/plus.png';

const AccessPhoto = () => {

    const [photo, setPhoto] = useState({ uri: "https://img.freepik.com/vecteurs-libre/silhouettes-tete-masculine-feminine-profil-personne-portraits-face-portraits-ombre-anonymes_229548-1243.jpg?size=626&ext=jpg" });

    const ChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            response.assets.map(address => {
                console.log("addresse")
                console.log(address.uri)
                if (address.uri) {
                    setPhoto({ uri: address.uri })
                }
            })
        })
    }

    return (
        <View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {photo ? (
                    <View>
                        <ImageProfil
                            source={{ uri: photo.uri }}
                        />
                    </View>
                ) : <View><Text></Text></View>

                }
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        ChoosePhoto()
                    }}
                >
                    <ImagePlus
                        source={Plus}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ImageProfil = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background-color: white;
    margin-top:30px;
`

const ImagePlus = styled.Image`
    width: 50px;
    height: 50px;
    margin-top:50%;
    margin-left:70%;
`

const Button = styled.TouchableOpacity`
 width: 200px;
    height: 40px;
    border-radius: 5px;
    background-color: #013252;
`



export default AccessPhoto;