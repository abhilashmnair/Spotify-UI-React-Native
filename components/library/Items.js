import { View, StyleSheet, Text, Image} from 'react-native'
import React from 'react'
import { MAINCARDS } from '../../assets/data/mainCards'

const Items = () => {
  return (
    <View style = {styles.container}>
        <View style = {{ flexDirection : 'row' }}>
            <View style = {styles.itemContainer} >
                <Text style = {styles.items}>Playlists</Text>
            </View>
            <View style = {styles.itemContainer} >
                <Text style = {styles.items}>Artists</Text>
            </View>
            <View style = {styles.itemContainer} >
                <Text style = {styles.items}>Albums</Text>
            </View>
        </View>
        <View style = {{ flexDirection : 'row', justifyContent : 'space-between', alignItems : 'space-between', marginBottom : 20}}>
            <View style = {{flexDirection : 'row'}}>
                <Image source = {{ uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/sorting-arrows.png'}} style = {{ width : 15, height :15}} />
                <Text style = {{
                    color : 'white',
                    fontWeight : '500',
                    marginLeft : 10,
                    fontSize : 12
                }}>Recently played</Text>
            </View>
            <Image source = {{ uri : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/health-data.png'}} style = {{ width : 20, height :20}} />
        </View>
        {MAINCARDS.map((item, index) => {
            if (item.type == 'playlist'){
                return(
                    <View style = {{flexDirection : 'row', margin : 10}} key = {index}>
                        <Image source = {{ uri : item.image }} style = {styles.thumb} />
                        <View style = {styles.text}>
                            <Text style = {styles.title} >
                                {item.title.length > 30 ? item.title.slice(0,30) + '...' : item.title}
                            </Text>
                            <Text style = {styles.subtitle}>Playlist • {item.owner}</Text>
                        </View>
                    </View>
                )
            } else if (item.type == 'album'){
                return (
                    <View style = {{flexDirection : 'row', margin : 10}} key = {index}>
                        <Image source = {{ uri : item.image }} style = {styles.thumb} />
                        <View style = {styles.text}>
                            <Text style = {styles.title} >
                                {item.title.length > 30 ? item.title.slice(0,30) + '...' : item.title}
                            </Text>
                            <Text style = {styles.subtitle}>Album • {item.artist}</Text>
                        </View>
                    </View>
                )
            } else {
                return(
                    <View style = {{flexDirection : 'row', margin : 10}} key = {index}>
                        <Image source = {{ uri : item.image }} style = {styles.thumb} />
                        <View style = {styles.text}>
                            <Text style = {styles.title}>
                                {item.title.length > 30 ? item.title.slice(0,30) + '...' : item.title}
                            </Text>
                            <Text style = {styles.subtitle}>Artist</Text>
                        </View>
                    </View>
                )
            }
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        marginHorizontal : 20,
        marginBottom : 50
    },

    text : {
        flexDirection : 'column',
        margin : 20
    },

    title : {
        color : 'white',
        fontSize : 12,
        fontWeight : '500',
        marginBottom : 3
    },

    subtitle : {
        color : 'gray',
        fontSize : 12,
        fontWeight : '500'
    },

    itemContainer : {
        width : 72,
        height : 33,
        borderColor : 'white',
        borderWidth : 0.5,
        borderRadius : 20,
        alignItems : 'center',
        justifyContent : 'center',
        marginRight : 10,
        marginBottom : 10
    },

    items : {
        color : 'white',
        fontSize : 13,
        fontWeight : '500'
    },

    thumb : {
        width : 80,
        height : 80,
        borderRadius : 5
    }
})

export default Items