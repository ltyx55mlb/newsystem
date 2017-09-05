import {View, Image, Dimensions,Text} from 'react-native';
import React from 'react';
import { DrawerNavigator, DrawerItems ,StackNavigator} from 'react-navigation';
import { Avatar } from 'react-native-elements'
import styles from '../components/commonstyles/styles'
import Home from './home';
import Payment from './payment';
import MyBlack from './home/blackview'
// import ModalStack from './home/newtest'
// import Navtest from './draws/drawtest';
// import Draw2 from './outlet/';
// import Draw3 from './draws/drawtest3';



const SCREEN_WIDTH = Dimensions.get('window').width;


const CustomDrawerContentComponent = props => (
  <View style={{backgroundColor: '#43484d',flex:1}}>
    <View style={{ marginTop: 20,marginBottom:10, justifyContent: 'center', alignItems: 'center' }}>
      <Avatar
        large
        rounded
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
    </View>
    <DrawerItems {...props} />
  </View>
);



const MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Home,
    } ,
    Payment:{
      path:'/Payment',
      screen:Payment,
    },
    MyBlack:{
      path:'/MyBlack',
      screen:MyBlack,
    },
    // ModalStack:{
    //   path:'/ModalStack',
    //   screen:ModalStack,
    // }
    // Draw2:{
    //   path:'/drawtest2',
    //   screen:Draw2,
    // }
    // Draw3:{
    //   path:'/drawtest3',
    //   screen:Draw3,
    // }
  },
  {
    initialRouteName: 'Payment',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.7,
    contentComponent: CustomDrawerContentComponent,
  }
);



export default MainRoot