import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ARTISTTOPALBUMS, ARTISTTOPTRACKS } from '../../assets/data/artistTopSongs'

const TopTracks = () => {
    return (
        <LinearGradient style = {styles.container} colors={['#5c2c2a', '#000000', '#000000']}>
            <View style = {styles.header}>
                <View>
                    <Text style = {{fontSize : 13, color : '#b0b0b0', fontWeight : 'bold'}}> 602,655 monthly listners</Text>
                    <View style = {{ flexDirection : 'row'}} >
                        <TouchableOpacity style = {styles.follow}>
                            <Text style = {{color : 'white', fontWeight : '700'} }>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                source = {{ uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/menu-2--v1.png' }} 
                                style = {{ width : 20, height : 20, margin : 15, marginLeft : 30}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image source = {{uri : 'https://img.icons8.com/ios-filled/1DB954/300/circled-play.png'}} style = {{ width : 60, height : 60}}/>
            </View>
            <ScrollView>
                <View>
                    <Text style = {{ fontSize : 17, color : 'white', marginBottom : 15, marginHorizontal : 20, fontWeight : 'bold'}}>Popular</Text>
                </View>
                {
                    ARTISTTOPTRACKS.map((item, index) => {
                        return(
                            <View style = {styles.itemContainer} key = {index}>
                                <TouchableOpacity activeOpacity = {0.5}>
                                    <View style = {{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'flex-start'}}>
                                        <Text style = {{color : 'white', fontWeight : 'bold', margin : 15, marginRight : 20}}>{index + 1}</Text>
                                        <Image source = {{ uri : item.album.images[0].url}} style = {{height : 50, width :50}} />
                                        <View style = {{ flexDirection : 'column', marginHorizontal : 10}}>
                                            <Text style = {{color : 'white', fontWeight : '500', fontSize : 14, marginVertical : 3}}>{item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name}</Text>
                                            <Text style = {{color : '#b0b0b0', fontWeight : '500', fontSize : 14}}>Popularity : {item.popularity}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image 
                                        source = {{ uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/menu-2--v1.png' }} 
                                        style = {{ width : 20, height : 20, marginVertical : 15}} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                <View>
                    <Text style = {{ fontSize : 17, color : 'white', marginVertical : 15, marginHorizontal : 20, fontWeight : 'bold'}}>Popular releases</Text>
                </View>
                {ARTISTTOPALBUMS.map((item, index) => {
                    return(
                        <View style = {styles.itemContainer} key = {index}>
                            <TouchableOpacity activeOpacity = {0.5}>
                                <View style = {{flexDirection : 'row', justifyContent : 'flex-start', alignItems : 'flex-start'}}>
                                    <Image source = {{ uri : item.images[0].url }} style = {{height : 80, width :80}} />
                                    <View style = {{ flexDirection : 'column', marginHorizontal : 10}}>
                                        <Text style = {{color : 'white', fontWeight : '500', fontSize : 15, marginVertical : 3}}>{item.name.length > 25 ? item.name.slice(0, 25) + '...' : item.name}</Text>
                                        <Text style = {{color : '#b0b0b0', fontWeight : '500', fontSize : 13, textTransform : 'capitalize' }}>{item.release_date.slice(0,4)} • {item.album_type}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image 
                                    source = {{ uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/menu-2--v1.png' }} 
                                    style = {{ width : 20, height : 20, marginVertical : 15}} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        top : 230,
        bottom : 0,
        right : 0,
        left : 0,
        marginBottom : 110
    },

    follow : {
        marginVertical : 10,
        height : 30,
        width : 70,
        borderWidth : 1,
        borderRadius : 5,
        borderColor : 'gray',
        justifyContent : 'center',
        alignItems : 'center'
    },
    
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        margin : 15
    },

    itemContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginVertical : 5,
        marginHorizontal : 15
    }
})
export default TopTracks