import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import PayView from './payView'

const Payment = StackNavigator({
  Payments: {
    screen: PayView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      // header: null, //无头部
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