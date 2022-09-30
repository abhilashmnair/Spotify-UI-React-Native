import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MAINCARDS } from '../../assets/data/mainCards'
import { RECENTLYPLAYED } from '../../assets/data/recentlyPlayed'

const MainCards = () => {
  return(
    <>
      <JumpBack />
      <RecentlyPlayed />
    </>
  )
}

const JumpBack = () => (
  <View style={{margin : 10}}>
    <Text style = {styles.text}>Jump back in</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {{marginTop : 20}}>
      {MAINCARDS.map((item, index) => {
        if (item.type == 'playlist') {
          return (
            <View style = {styles.card} key = {index}>
              <Image style = {styles.thumb} source = {{uri : item.image}}/>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )} else if (item.type == 'album') {
            return (
              <View style = {styles.card} key = {index}>
                <Image style = {styles.thumb} source = {{uri : item.image}}/>
                <Text style={styles.album_title}>{
                  item.title.length > 20 ? item.title.slice(0,20) + '...' : item.title
                }</Text>
                <Text style={styles.artist_title}>Album • {item.artist}</Text>
              </View>
            
          )} else {
            return (
              <View style = {styles.card} key = {index}>
                <Image style = {styles.thumb_artist} source = {{uri : item.image}}/>
                <Text style={styles.title_artist}>{item.title}</Text>
              </View>
            
          )}
      })}
    </ScrollView>
  </View>
)

const RecentlyPlayed = () => (
  <View style={{margin : 10}}>
    <Text style = {styles.text}>Recently played</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {{marginTop : 20}}>
      {RECENTLYPLAYED.map((item, index) => {
        if (item.type == 'album' || item.type == 'playlist') {
          return (
            <View style = {styles.r_card} key = {index}>
              <Image style = {styles.r_thumb} source = {{uri : item.image}}/>
              <Text style={styles.r_title}>{item.title}</Text>
            </View>
           )} else {
          return (
            <View style = {styles.r_card} key = {index}>
              <Image style = {styles.r_thumb_artist} source = {{uri : item.image}}/>
              <Text style={styles.title_artist}>{item.title}</Text>
            </View>
          )}
      })}
    </ScrollView>
    <View style = {{margin : 55 }}>
    </View>
  </View>
)

const styles = StyleSheet.create({
  r_card : {
    width : 100,
    height : 150,
    alignItems : 'flex-start',
    marginHorizontal : 10
  },

  r_thumb : {
    height : 100,
    width : 100,
    borderRadius : 5
  },

  r_thumb_artist : {
    height : 100,
    width : 100,
    borderRadius : 50
  },

  r_title : {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 12,
    marginTop : 10,
  },

  title_artist : {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 12,
    width : '100%',
    marginTop : 10,
    textAlign: 'center'
  },

  album_title: {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 14,
    marginTop : 10
  },

  artist_title: {
    color : 'gray',
    fontSize : 12,
    marginTop : 2,
    fontWeight : '500',
  },

  thumb : {
    height : 150,
    width : 150,
    borderRadius : 5
  },

  thumb_artist : {
    height : 150,
    width : 150,
    borderRadius : 100
  },
  
  text : {
    color : 'white',
    fontWeight : 'bold',
    fontSize : 23,
    marginLeft : 10
  },
  
  card : {
    width : 150,
    height : 200,
    alignItems : 'flex-start',
    marginHorizontal : 10
  },

  title : {
    color : 'gray',
    fontWeight : 'bold',
    fontSize : 12,
    marginTop : 10
  }
})

export default MainCards