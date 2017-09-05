import React from 'react';
import {TouchableOpacity} from 'react-native'
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import PayView from './payView'

import PayView1 from './payView1';
import PayView2 from './payView2';
import PayView3 from './payView3';
import PayView4 from './payView4';
import PayView5 from './payView5';

const ViewHome1 = ({ navigation }) => (
  <PayView1 navigation={navigation} />
);
const ViewHome2 = ({ navigation }) => (
  <PayView2 navigation={navigation} />
);
const ViewHome3 = ({ navigation }) => (
  <PayView3 navigation={navigation} />
);
const ViewHome4 = ({ navigation }) => (
  <PayView4 navigation={navigation} />
);
const ViewHome5 = ({ navigation }) => (
  <PayView5 navigation={navigation} />
);

const Payment = StackNavigator({
  Payments: {
    screen: PayView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      // header: null, //无头部
      title: '基础数据',
      headerStyle:{backgroundColor:'#373334'},
      headerTitleStyle:{color:'#FFFFFF'},
      tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon
          name="menu"
          size={30}
          type="entypo"
          color='#FFFFFF'
          style={{ paddingRight: 10}}
        />
        </TouchableOpacity>
      ),
    }),
  },
  payV1: {
    path: 'payView/:1',
    screen: ViewHome1,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:false,                // 隐藏Tab
      header: null,
    })
  },
  payV2: {
    path: 'payView/:2',
    screen: ViewHome2,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:false,                // 隐藏Tab
      header: null,
    })
  },
  payV3: {
    path: 'payView/:3',
    screen: ViewHome3,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:false,                // 隐藏Tab
      header: null,
    })
  },
  payV4: {
    path: 'payView/:4',
    screen: ViewHome4,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:false,                // 隐藏Tab
      header: null,
    })
  },
  payV5: {
    path: 'payView/:5',
    screen: ViewHome5,
    navigationOptions: ({ navigation }) => ({
      tabBarVisible:false,                // 隐藏Tab
      header: null,
    })
  },
});

Payment.navigationOptions = {
  drawerLabel: '支付',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="accessibility"
      size={30}
      style={{
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      color={tintColor}
      type="material-icons"
    />
  ),

};
export default Payment;