import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const ICONS = [
    {
        icon : 'like',
        active : 'https://img.icons8.com/fluency-systems-filled/1DB954/60/like--v1.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/like--v1.png'
    },
    {
        icon : 'shuffle',
        active : 'https://img.icons8.com/fluency-systems-regular/1DB954/300/shuffle.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/300/shuffle.png'
    },
    {
        icon : 'play',
        active : 'https://img.icons8.com/ios-filled/ffffff/300/circled-pause.png',
        inactive : 'https://img.icons8.com/ios-filled/ffffff/300/circled-play.png'
    },
    {
        icon : 'repeat',
        active : 'https://img.icons8.com/ios-glyphs/1DB954/60/repeat.png',
        inactive : 'https://img.icons8.com/ios-glyphs/ffffff/60/repeat.png'

    },
]

const LYRICS = `Uh\nRico Act?\nHeritage\nAh\nLook, look, look, look\nYeah, you come with me, I turn you into a pro, I'm not an amateur`

const Player = ({navigation}) => {
    const [likeActive, setLike] = useState(ICONS[0].icon)
    const [shuffleActive, setShuffle] = useState(ICONS[1].icon)
    const [playActive, setPlay] = useState(ICONS[2].icon)
    const [repeatActive, setRepeat] = useState(ICONS[3].icon)

    return (
        <ScrollView showsVerticalScrollIndicator = {false}>
            <LinearGradient colors={['#ae724f', '#000000', '#000000']}>
            <View style = {styles.container}>
                <TouchableOpacity onPress = {() => navigation.goBack()} >
                    <Image 
                        source = {{uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/expand-arrow.png'}} 
                        style = {styles.icon} />
                </TouchableOpacity>
                <View style = {styles.header}>
                    <Text style = {styles.topText}>PLAYING FROM ALBUM</Text>
                    <Text style = {styles.titleText}>40 Cal (Remixes)</Text>
                </View>
                <TouchableOpacity>
                    <Image 
                        source = {{ uri : 'https://img.icons8.com/fluency-systems-filled/ffffff/60/menu-2--v1.png'}} 
                        style = {styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.album}>
                <Image 
                    source = {{uri : 'https://i.scdn.co/image/ab67616d0000b27321cc84c617f5d1f1df369f56'}} 
                    style = {styles.albumart} />
            </ View>
            <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <View style = {styles.textContainer}>
                    <Text style = {styles.title}>40 Cal - PLEEG Remix</Text>
                    <Text style = {styles.artist}>Hairitage, Rico Act, PLEEG</Text>
                </View>
                <TouchableOpacity onPress = {() => setLike((isLiked) => !isLiked)}>
                    <Image 
                        source = {{uri : likeActive ? ICONS[0].inactive : ICONS[0].active}} 
                        style = {styles.like} />
                </TouchableOpacity>
            </View>
            <View style = {{marginHorizontal : 40, marginTop : 20}} >
                <Divider width = {3} borderRadius = {5} color = {'#ffffff'} />
            </View>
            <View style = {{
                flexDirection : 'row', 
                justifyContent : 'space-between',
                marginHorizontal : 40,
                marginTop : 5}}>
                
                <Text style = {styles.time}>0:35</Text>
                <Text style = {styles.time}>3:45</Text>
            </View>
            <View style = {styles.iconContainer}>
                <TouchableOpacity onPress = {() => setShuffle((isShuffle) => !isShuffle)}>
                    <Image 
                        source = {{uri : shuffleActive ? ICONS[1].inactive : ICONS[1].active}} 
                        style = {styles.sideIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source = {{uri : 'https://img.icons8.com/ios-filled/ffffff/300/skip-to-start--v1.png'}} 
                        style = {styles.seekIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => setPlay((isPlay) => !isPlay)}>
                    <Image 
                        source = {{uri : playActive ? ICONS[2].inactive : ICONS[2].active}} 
                        style = {styles.playIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source = {{uri : 'https://img.icons8.com/ios-filled/ffffff/300/end--v1.png'}} 
                        style = {styles.seekIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => setRepeat((isRepeat) => !isRepeat)}>
                    <Image 
                        source = {{uri : repeatActive ? ICONS[3].inactive : ICONS[3].active}}
                        style = {styles.sideIcon} />
                </TouchableOpacity>            
            </View>
            <View style = {styles.bottomIconContainer} >
                <Image 
                    source = {{ uri : 'https://img.icons8.com/fluency-systems-regular/909090/60/computer.png'}}
                    style = {styles.bottomIcon} />
                <View style = {{flexDirection : 'row'}}>
                <Image 
                    source = {{ uri : 'https://img.icons8.com/fluency-systems-regular/909090/60/share.png'}}
                    style = {styles.bottomIcon2} />
                <Image 
                    source = {{ uri : 'https://img.icons8.com/ios/909090/60/menu--v1.png'}}
                    style = {styles.bottomIcon2} />
                </View>
            </View>
            <View style = {styles.container} >
                <View style = {styles.lyricsCard} >
                    <Text style ={{
                        fontSize : 12,
                        color : 'white',
                        letterSpacing : 2,
                        marginTop : 10,
                        fontWeight : 'bold',
                        marginLeft : 10
                    }} > LYRICS </Text>
                    <Text style = {styles.lyrics}>{LYRICS}</Text>
                    <TouchableOpacity style = {{flexDirection : 'row', alignItems : 'flex-end', justifyContent : 'flex-end'}}>
                        <View style = {styles.shareContainer}>
                            <Image 
                                source = {{ uri : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/share.png'}}
                                style = {{width : 10, height : 10, marginRight : 10}} />
                            <Text style = {styles.shareText}>SHARE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </LinearGradient>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },

    iconContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginHorizontal : 40,
        marginTop : -20
    },

    bottomIconContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'flex-start',
        marginHorizontal : 30,
        marginTop : 20
    },

    shareContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        margin : 30,
        borderColor : 'white',
        borderRadius : 30,
        width : 100,
        height : 30,
        borderWidth : 0.2
    },

    shareText :{
        color : 'white',
        letterSpacing : 3,
        fontSize : 10,
        fontWeight : '700',
    },

    time : {
        color : 'gray',
        fontSize : 13
    },

    lyricsCard : {
        flexDirection : 'column',
        marginHorizontal : 30,
        marginTop : 20,
        backgroundColor : '#ae724f',
        width : '85%',
        borderRadius : 10,
        marginBottom : 50
    },

    lyrics : {
        marginTop : 20,
        marginHorizontal : 15,
        fontWeight : 'bold',
        fontSize : 23,
        lineHeight : 35,
        color : '#303030'
    },
    
    header : {
        marginTop : 20,
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center'
    },

    topText : {
        color : 'white',
        fontSize : 10,
        letterSpacing : 1.5
    },

    titleText : {
        color : 'white',
        fontSize : 13,
        fontWeight : 'bold'
    },

    like : {
        marginTop : 90,
        height : 30,
        width : 30,
        marginRight : 40
    },

    icon : {
        marginTop : 20,
        height : 20,
        width : 20
    },

    bottomIcon : {
        height : 20,
        width : 20
    },

    bottomIcon2 : {
        height : 20,
        width : 20,
        marginLeft : 30
    },

    seekIcon : {
        marginTop : 20,
        height : 35,
        width : 35
    },

    sideIcon : {
        marginTop : 20,
        height : 25,
        width : 25
    },

    playIcon : {
        marginTop : 20,
        height : 70,
        width : 70
    },

    album : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        marginTop : 65
    },

    albumart : {
        height : 310,
        width : 310,
        borderRadius : 5
    },

    textContainer : {
        marginLeft : 40,
        marginTop : 80,
    },

    title : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20
    },

    artist : {
        color : 'gray',
        marginTop : 2,
        fontWeight : '500'
    }
})

export default Player