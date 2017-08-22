import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import MyNav from './tabsetnnn'
import MyNava from './tabsetnnna'
import MyNavtea from './tabsetview'

const MyNavScreen = ({ navigation }) => (
  <MyNav navigation={navigation} />
);
const MyNavScreena = ({ navigation }) => (
  <MyNava navigation={navigation} />
);
const MyNavScreentea = ({ navigation }) => (
  <MyNavtea navigation={navigation} />
);

const ProfileNavigator = StackNavigator(
  {
    Home: {
      screen: MyNavScreen,
    },
    Profile: {
      path: 'people/:name',
      screen: MyNavScreena,
    },
    Profileqwe: {
      path: 'people/asd',
      screen: MyNavScreentea,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

export default ProfileNavigator;