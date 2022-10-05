import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Header from '../components/ArtistsComponents/Header'
import React from 'react'
import TopTracks from '../components/ArtistsComponents/ArtistTab'
import Footer from '../components/library/Footer'
import NowPlaying from '../components/home/NowPlaying'

const ArtistScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container} >
      <StatusBar hidden = {false} />
      <Header navigation = {navigation} />
      <TopTracks />
      <NowPlaying navigation = {navigation} />
      <Footer navigation = {navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'black',
        flex : 1
    }
})

export default ArtistScreen