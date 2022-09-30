import { StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Player from '../components/player/Player'

const PlayerScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <StatusBar hidden = {false} />
      <Player navigation = {navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
    flex : 1,
  }
})

export default PlayerScreen