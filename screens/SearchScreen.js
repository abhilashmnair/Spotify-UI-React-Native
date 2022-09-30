import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Footer from '../components/search/Footer'
import Header from '../components/search/Header'
import SearchCards from '../components/search/SearchCards'

const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar hidden = {false} />
      <ScrollView>
      <Header />
      <SearchCards />
      </ScrollView>
      <Footer navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    flex : 1,
  }
})

export default SearchScreen