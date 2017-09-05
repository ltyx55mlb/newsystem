import React from 'react'
import { View, Text, Dimensions, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import Chart from '../../modules/Charts/container'
import png from '../../modules/Charts/components/backgroundpng.png'
import { Icon } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const PayView = ({ navigation }) => (
  <View>
    <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
    />
    <ImageBackground source={png} >

      <View style={{ height: SCREEN_HEIGHT - 124 }}>
        <ScrollView >
          <Chart navigation={navigation} />
        </ScrollView>
      </View>

      <View style={{ height: 60 }}>
        <View style={{ height: 10 }}>
        </View>
        <View style={{ height: 50, flexDirection: 'row', backgroundColor: '#f6f6f6', borderTopWidth: 1, borderTopColor: '#e9e9e9' }}>
          <View style={{ width: SCREEN_WIDTH / 5, marginTop: 3 }}>
            <TouchableOpacity onPress={() => navigation.navigate('payV1')} >
              <Icon name='business-center' size={28} color='#B3B3B3' />
              <Text style={{ fontSize: 10, color: '#666', alignSelf: 'center', marginTop: 3 }}>采购</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: SCREEN_WIDTH / 5, marginTop: 3 }}>
            <TouchableOpacity onPress={() => navigation.navigate('payV2')} >
              <Icon name='trending-up' size={28} color='#B3B3B3' />
              <Text style={{ fontSize: 10, color: '#666', alignSelf: 'center', marginTop: 3 }}>销售</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: SCREEN_WIDTH / 5, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: 60, height: 60, borderRadius: 30, marginTop: -15, backgroundColor: '#f6f6f6', borderWidth: 1, borderColor: '#e9e9e9' }}>
              <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#373334', marginTop: 4, marginLeft: 4 }}>
                <TouchableOpacity style={{ marginTop: 5 }} onPress={() => navigation.navigate('payV3')}>
                  <Icon name='bubble-chart' size={40} color='#FFFFFF' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ width: SCREEN_WIDTH / 5, marginTop: 3 }}>
            <TouchableOpacity onPress={() => navigation.navigate('payV4')} >
              <Icon name='store' size={28} color='#B3B3B3' />
              <Text style={{ fontSize: 10, color: '#666', alignSelf: 'center', marginTop: 3 }}>货品</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: SCREEN_WIDTH / 5, marginTop: 3 }}>
            <TouchableOpacity onPress={() => navigation.navigate('payV5')}>
              <Icon name='perm-identity' size={28} color='#B3B3B3' />
              <Text style={{ fontSize: 10, color: '#666', alignSelf: 'center', marginTop: 3 }}>我的</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);

export default PayView;
