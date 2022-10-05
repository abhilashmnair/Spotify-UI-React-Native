import { StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/home/Header'
import RecentPlays from '../components/home/RecentPlays'
import React from 'react'
import MainCards from '../components/home/MainCards'
import Footer from '../components/home/Footer'
import NowPlaying from '../components/home/NowPlaying'
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = ({navigation}) => {
  return (
      <SafeAreaView style = {styles.container}>
        <StatusBar hidden = {false} />
        <LinearGradient colors={['#707070', '#090909', '#000000']}>
        <ScrollView>
          <Header />
          <RecentPlays navigation = {navigation} />
          <MainCards />
        </ScrollView>
        <NowPlaying navigation = {navigation} />
        <Footer navigation = {navigation} />
        </LinearGradient>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    flex : 1,
  }
})

export default HomeScreen