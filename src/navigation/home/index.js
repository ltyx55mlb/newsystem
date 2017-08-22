import React from 'react';
import { View ,Platform} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import ViewHome from './homeview';
import ProfileNavigator from './tabsetview'


import MyNav from './tabsetnnn'
import MyNava from './tabsetnnna'
import MyNavtea from './tabsetview'
import MyBlack from './blackview'

const ButtonsTabView = ({ navigation }) => (
  <ViewHome navigation={navigation} />
);
const SettingTabView = ({ navigation }) => (
  <ProfileNavigator navigation={navigation} />
);

const MyNavScreen = ({ navigation }) => (
  <TabNav navigation={navigation} />
);
const MyNavScreena = ({ navigation }) => (
  <MyNava navigation={navigation} />
);
const MyNavScreentea = ({ navigation }) => (
  <MyNavtea navigation={navigation} />
);
const MyBlackScreen = ({ navigation }) => (
  <MyBlack navigation={navigation} />
);


const ButtonsTab = StackNavigator({
  Buttons: {
    screen: ButtonsTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: '商品列表',
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  }
});

const SettingTab = StackNavigator({
  Buttons: {
    screen: SettingTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  Profile: {
      path: 'people/:name',
      screen: MyNavScreena,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible:false,                // 隐藏Tab
        header: null,
      })
    },
  Profileqwe: {
      path: 'people/asd',
      screen: MyNavScreentea,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarVisible:false,                // 隐藏Tab
      })
  },
  Blackfile: {
      path: 'people/Blackfile',
      screen: MyBlackScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarVisible:false,                // 隐藏Tab
      })
  },
});
  
const Home = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Buttons',
          tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    SettingTab: {
      screen: SettingTab,
      path: '/Settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },


  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

Home.navigationOptions = {
  drawerLabel: '主页',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      type="material-commnity"
      color={tintColor}
    />
  ),

};


export default Home;