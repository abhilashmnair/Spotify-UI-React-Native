import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/library/Header'
import Footer from '../components/library/Footer'
import Items from '../components/library/Items'

const LibraryScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator = {true}>
        <Items />
      </ScrollView>
      <Footer navigation = {navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    flex : 1
  }
})
export default LibraryScreen