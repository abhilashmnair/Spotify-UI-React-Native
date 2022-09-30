import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const ICONS = [
    {
        icon : 'like',
        active : 'https://img.icons8.com/fluency-systems-filled/1DB954/60/like--v1.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/like--v1.png'
    },
    {
        icon : 'play',
        active : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/pause--v1.png',
        inactive : 'https://img.icons8.com/fluency-systems-regular/ffffff/60/play--v1.png'
    }
]

const NowPlaying = ({navigation}) => {
    const [likeActive, setLike] = useState(ICONS[0].icon)
    const [playActive, setPlay] = useState(ICONS[1].icon)

    return (
        <TouchableOpacity activeOpacity={1} style = {styles.container} onPress = {() => navigation.push('PlayerScreen')}>
            <View style = {{flexDirection : 'row'}}>
                <Image style = {styles.thumb} source = {{uri : 'https://i.scdn.co/image/ab67616d0000b27321cc84c617f5d1f1df369f56'}} />
                <View style = {{flexDirection : 'column'}}>
                    <Text style = {styles.title}>40 Cal - Jiiko Remix</Text>
                    <Text style = {{color : '#A9A9A9', fontSize : 13, marginTop : 2, fontWeight : '500'}}>Hairitage</Text>
                </View>
            </View>
            <View style = {styles.iconContainer}>
                <TouchableOpacity onPress = {() => setLike((isLiked) => !isLiked)} >
                    <Image style = {styles.icon} source = {{uri : likeActive ? ICONS[0].inactive : ICONS[0].active}} />
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => setPlay((isPlay) => !isPlay)} >
                    <Image style = {styles.icon} source = {{uri : playActive ? ICONS[1].inactive : ICONS[1].active}} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        left: 0,
        bottom: 40,
        right: 0,
        flexDirection : 'row',
        margin : 10,
        height : 55,
        backgroundColor : '#282828',
        borderRadius : 5,
        justifyContent : 'space-between',
    },
    
    thumb : {
        height : 40,
        width : 40,
        borderRadius : 5,
        overflow : 'hidden',
        margin : 8
    },

    title : {
        color : 'white',
        marginTop : 10,
        fontWeight : '700',
        fontSize : 13,
    },
    
    icon : {
        height : 25,
        width : 25,
        marginLeft : 20
    },

    iconContainer : {
        flexDirection : 'row',
        margin : 13,
    }
})

export default NowPlaying