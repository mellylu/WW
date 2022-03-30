import React, { useState } from 'react';
import { View, FlatList, VirtualizedList, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Logo from '../../components/logo';
import Middle from '../../components/middle';
import styled from 'styled-components'
import Coeur from '../../images/coeur.png'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage, hideMessage } from "react-native-flash-message";
import readFavorite from '../utils/readFavorite';

const ResultScreen = ({ route, navigation }) => {

    const [result, setResult] = useState([{ "_id": "7896513312fe9f5b041e5g6c", "name": "Bar au beurre blanc", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img.cuisineaz.com/660x660/2013/12/20/i8766-photo-de-bar-au-beurre-blanc.jpeg", "description": "Le beurre blanc est une sauce émulsionnée à chaud qui accompagne de nombreux poissons pochés ou grillés. On parle également de « beurre nantais »." }, { "_id": "6222913312fe9f5b041e0c8f", "name": "Boeuf Bourguignon", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img-3.journaldesfemmes.fr/n7hKEGA7OFGZ8KfeTewfNnrt6H8=/750x500/smart/d6db2baa728b47f8adbf30b99a957dc0/recipe-jdf/10002051.jpg", "description": "Le bœuf bourguignon est une recette de cuisine d'estouffade de bœuf, traditionnelle de la cuisine bourguignonne, cuisinée au vin rouge de Bourgogne, avec une garniture de champignons, de petits oignons et de lardons." }, { "_id": "2563147890fe9f5b041e0c8f", "name": "Poulet pomme de terre", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img.cuisineaz.com/610x610/2017/02/06/i120678-cuisses-de-poulet-et-pommes-de-terre-au-four.jpeg", "description": "Une recette extrêmement facile pour le quotidien de poulet rôti et de pommes de terre, le tout cuit au four. Vous allez vous régaler." }, { "_id": "2105364521fe9f5b041e0c8f", "name": "Boeuf Bourguignon", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img-3.journaldesfemmes.fr/n7hKEGA7OFGZ8KfeTewfNnrt6H8=/750x500/smart/d6db2baa728b47f8adbf30b99a957dc0/recipe-jdf/10002051.jpg" }, { "_id": "2564547858fe9f5b041e0c8f", "name": "Boeuf Bourguignon", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img-3.journaldesfemmes.fr/n7hKEGA7OFGZ8KfeTewfNnrt6H8=/750x500/smart/d6db2baa728b47f8adbf30b99a957dc0/recipe-jdf/10002051.jpg" }, { "_id": "9898545256fe9f5b041e0c8f", "name": "Boeuf Bourguignon", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img-3.journaldesfemmes.fr/n7hKEGA7OFGZ8KfeTewfNnrt6H8=/750x500/smart/d6db2baa728b47f8adbf30b99a957dc0/recipe-jdf/10002051.jpg" }])
    const [idElement, setIdElement] = useState()
    const [tabAsyncStorage, setTabAsyncStorage] = useState([]);


    const checkFavorite = async item => {
        const allFavorite = await readFavorite()
        const index = allFavorite.findIndex(element => element.id === item._id)
        console.log(index)
        if (index === -1) {
            const newData = tabAsyncStorage;
            newData.push({ name: item.name, id: item._id, image: item.image, description: item.description })
            setTabAsyncStorage(newData)
            const jsonValue = JSON.stringify(tabAsyncStorage)
            console.log(jsonValue)
            await AsyncStorage.setItem('Favoris', jsonValue);
        }
        else {
            console.log("dans le else")
        }
    }

    //SI API
    // axios({
    //     method: 'GET',
    //     url: 'http://localhost:5000/api/v1/food/',
    //     params: {
    //          type : route.params.categoryFood
    //          plats : route.params.typeVin
    //     }
    //   })

    return (
        <View>

            <Logo />

            <Middle>
                <FlatList
                    data={result}
                    renderItem={({ item }) => (

                        <ViewFlex>

                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIdElement(item._id);
                                        navigation.navigate({
                                            name: "DescriptionSheetScreen",
                                            params: { id: idElement }
                                        })
                                    }}
                                >
                                    <ImageFood
                                        source={{ uri: item.image }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <ViewRight>
                                <TextName>{item.name}</TextName>
                                <TouchableOpacity
                                    onPress={() => {
                                        checkFavorite(item)
                                        showMessage({
                                            message: `${item.name} ajouté aux favoris`,
                                            type: "none",
                                        });

                                    }}
                                >
                                    <ImageCoeur
                                        source={Coeur}
                                    />
                                </TouchableOpacity>

                            </ViewRight>
                        </ViewFlex>
                        
                    )}

                    keyExtractor={item => item._id}
                />

            </Middle>

        </View>
    );
};

const ImageCoeur = styled.Image`
    height:40px;
    width:50px;
`

const ViewFlex = styled.View`
    flex-direction :row ;
    margin-top:20px;
    margin-left: 30px;
`

const ViewRight = styled.View`
    margin-top:auto;
    margin-bottom: auto;
    margin-left: 20px;
`

const ImageFood = styled.Image`
    height:100px;
    width:100px;
    border: none;
    border-radius : 100px;
`

const TextName = styled.Text`
    text-transform : uppercase;
    color: #013252;
`



export default ResultScreen;