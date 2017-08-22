import React from 'react'
import {View, Text,Image,Dimensions,ImageBackground,Button} from 'react-native'
// import Main from '../../modules/Main/mainContainer'
import List from '../../modules/List/homeContainer'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


export default (navigation) => (
     <View>
    <Image
        source={{url:'http://img1.juimg.com/151216/330715-1512160445568.jpg'}}
        style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT,backgroundColor:'rgba(0,0,0,0)'}}
    >
        <Button onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
             title={'asdsa'}/>
    </Image>
     </View>
)
