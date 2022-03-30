import React, { useState, useEffect } from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-native-snap-carousel';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../components/logo';
import Middle from '../../components/middle';
import { useFocusEffect } from '@react-navigation/native';
import readFavorite from '../utils/readFavorite';
import Croix from '../../images/croixBleue.png'
import styled from 'styled-components'



const FavoriteScreen = () => {

  const [favoris, setFavoris] = useState();

  useEffect(() => {
      AsyncStorage.getItem('Favoris').then((res) => {
      setFavoris(JSON.parse(res));
    })
  }, [])

  useFocusEffect(() => {
    AsyncStorage.getItem('Favoris').then((res) => {
      setFavoris(JSON.parse(res));
    })
  })
  


  const deleteFavorite = async (id) => {
    let newFavoris = []
    const allFavorite = await readFavorite()
    const data = allFavorite.map(favoris => {
      if (favoris.id !== id) {
        newFavoris.push(favoris);
        
      }
      setFavoris([...newFavoris])
    })
    
    await AsyncStorage.setItem('Favoris', JSON.stringify(newFavoris));
  }

  return (

    <View>

      <Logo></Logo>

      <Middle>

        <View >

          {
            favoris ? (

              <ViewCarousel>

                <Carousel
                  data={favoris}
                  renderItem={({ item }) => (

                    <View>

                      <Text></Text>
                      <TextName>{item.name}</TextName>
                      <Text></Text>

                      <ViewImg>
                        <TouchableOpacity onPress={() => {
                          deleteFavorite(item.id)
                        }}><ImageCroix source={Croix} />
                        </TouchableOpacity>
                        <ImageFood
                          source={{ uri: item.image }}
                        ></ImageFood>
                        <Text></Text>
                        <TextDescription>{item.description}</TextDescription>
                      </ViewImg>

                    </View>
                    
                  )}
                  sliderWidth={300}
                  itemWidth={300}
                />

              </ViewCarousel>

            ) : <View><Text></Text></View>
          }

        </View>
      </Middle>

    </View>

  );
};

const ImageCroix = styled.Image`
margin-top: 20px;
    height:40px;
    width:50px;
    left:85%;
`

const ImageFood = styled.Image`
    height:250px;
    width:250px;
    border: none;
    -moz-border-radius : 130px;
    -webkit-border-radius : 130px;
    border-radius : 130px;
    z-index:0;
    margin-left:auto;
  margin-right:auto;
  margin-top:-30px;
`

const TextName = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #013252;
`

const TextDescription = styled.Text`
    text-align: center;
    font-style: italic;
    color: #013252;
`


const ViewCarousel = styled.View`
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  
`
const ViewImg = styled.View`
  z-index:1;
  margin-top: -15px;
`

export default FavoriteScreen;
