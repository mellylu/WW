import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { ScrollView } from 'react-native-gesture-handler';

const DescriptionSheetScreen = ({ route }) => {

    const [food, setFood] = useState({ "_id": "7896513312fe9f5b041e5g6c", "name": "Bar au beurre blanc", "category": "plat", "nameType": "boeuf", "type": "viande rouge", "__v": 0, "image": "https://img.cuisineaz.com/660x660/2013/12/20/i8766-photo-de-bar-au-beurre-blanc.jpeg", "description": "Le beurre blanc est une sauce émulsionnée à chaud qui accompagne de nombreux poissons pochés ou grillés. On parle également de « beurre nantais ».", "ingredients": ["bar - 2", "beurre - 150g", "court bouillon pour poisson - 1 cuillère à café", "vin blanc - 10 cl", "échalote - 1", "citron - 1", "persil - quelques brins", "sel et poivre"] })

    //SI API
    // const {
    //     id
    // } = route.params.id;

    // axios({
    //     method: 'GET',
    //     url: 'http://localhost:5000/api/v1/food/',
    //     params: {
    //       id
    //     }
    //   })


    return (
        <View>
            <ScrollView>
                <Modal>
                    <ImageFood
                        source={{ uri: food.image }}
                    />
                </Modal>

                <Description>
                    {
                        food ? (
                            <View>
                                <TextFood></TextFood>
                                <TextName>{food.name}</TextName>
                                <Text></Text>
                                <TextFood>{food.description}</TextFood>
                                <TextFood></TextFood>
                                {
                                    food.ingredients ? (
                                        <>
                                            <TextName>Ingrédients</TextName>

                                            
                                                <FlatList
                                                    data={food.ingredients}
                                                    renderItem={({ item }) => (
                                                        <View>
                                                            <TextIngredients>- {item}</TextIngredients>

                                                        </View>

                                                    )}
                                                    keyExtractor={item => item._id}
                                                />
                                        </>
                                    ) : <View><Text></Text></View>
                                }
                            </View>
                        ) : <View><Text></Text></View>
                    }


                </Description>
                </ScrollView>
                </View>
         
       
    );
};

const Modal = styled.View`
   width: 100%;
    height: 250px;
    background-color: #013252;
`

const TextFood = styled.Text`
    color:#013252;
    text-align:center;
    margin-left:10px;
    margin-right:10px;
`

const TextName = styled.Text`
    color:#013252;
    text-transform : uppercase;
    text-align:center;
    text-decoration: underline;
`

const ImageFood = styled.Image`
    height:300px;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 40px;
`

const Description = styled.View`
    margin-top : 80px;
`

const TextIngredients = styled.Text`
    margin-left : 20px;
    color:#013252;
`

export default DescriptionSheetScreen;