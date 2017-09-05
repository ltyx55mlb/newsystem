import React from 'react'
import {View, Text,ImageBackground,Dimensions,Button,ScrollView} from 'react-native'
// import Main from '../../modules/Main/mainContainer'
import List from '../../modules/List/homeContainer'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MyNav = ({ navigation }) => (
<ScrollView>
   <ImageBackground
        source={{url:'http://img1.juimg.com/151216/330715-1512160445568.jpg'}}
        style={{width:SCREEN_WIDTH,height:SCREEN_HEIGHT,backgroundColor:'rgba(0,0,0,0)'}}
    >
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ImageBackground>  
  </ScrollView>
); 

export default MyNav;
