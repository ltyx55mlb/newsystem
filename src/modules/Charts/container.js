import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, PixelRatio, StyleSheet } from 'react-native'
import Echarts from 'native-echarts';

import { getBiao } from '../../services/user.api'

import chartoption from '../../../chartconfig'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Pixeget = PixelRatio.get()


class container extends Component {
  constructor(props) {
    super(props);
    this.total = '999999.00'
    this.state = {
      option: {},
      optiona: {},
      optionhuan: {}
    }
  }

  componentWillMount() {
    this._charthandle()
  }

  _backLastPage() {
    const { navigation } = this.props;
    navigation.navigate('payV5')

  }

  _charthandle = async () => {
    let mockdata = await getBiao()
    
    let dataname = []
    let datapie = []
    let chartline = chartoption.optiona
    let chartpie = chartoption.option
    let charthuan = chartoption.optionhuan
    for(let i = 0;i<mockdata.data.length;i++){
      dataname.push(mockdata.data[i].name)
      datapie.push(mockdata.data[i])
      
    }
    for(let i = 0; i <2;i++){
      charthuan.series[0].data[i].value = mockdata.data[i].value
    }
console.log(charthuan)
    chartpie.legend.data = dataname
    chartpie.series[0].data = datapie

    this._Ondata(chartpie,charthuan)
  }

  _Ondata = (chartpie,charthuan) => {
    this.setState({
      optiona: chartoption.optiona,
      option: chartpie,
      optionhuan: charthuan
    })
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
          <Echarts option={this.state.optiona} height={Pixeget == 3 ? 270 : 230} />
        </View>

        <View style={{ backgroundColor: 'rgba(0,0,0,0.05)', height: 10 }}></View>

        <View style={{ flex: 1 }}>
          <Echarts option={this.state.option} height={Pixeget == 3 ? 180 : 152} />
        </View>

        <View style={{ backgroundColor: 'rgba(0,0,0,0.05)', height: 10 }}></View>

        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View style={{ marginTop: 10, marginLeft: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.font14, { color: '#333' }]}>库存总价值：￥{this.total}</Text>
            <View style={{ flexDirection: 'row', marginRight: 15, marginTop: 3 }}>
              <View style={{ height: 8, width: 8, borderRadius: 4, marginTop: 1, backgroundColor: '#fdbb00' }}></View>
              <Text style={[styles.font10, { color: '#090909', marginLeft: 4 }]}>滞销</Text>
              <View style={{ height: 8, width: 8, borderRadius: 4, marginTop: 1, marginLeft: 10, backgroundColor: '#387ef7' }}></View>
              <Text style={[styles.font10, { color: '#090909', marginLeft: 4 }]}>健康</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ marginTop: 10, marginLeft: 10 }}>
              <Echarts option={this.state.optionhuan} height={110} width={110} />
            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', marginLeft: 15 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 4, height: 40, backgroundColor: '#387ef7' }}></View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'space-between' }}>
                    <Text style={[styles.font16, { color: '#387EF7' }]}>63%</Text>
                    <Text style={[styles.font12, { color: '#333333', marginBottom: 3 }]}>健康库存</Text>
                  </View>
                  <View style={{ marginRight: 15, marginTop: 7 }}>
                    <Text style={[styles.font16, { color: '#387EF7' }]}>￥6287.00</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 4, height: 40, backgroundColor: '#fdbb00' }}></View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'column', marginLeft: 10, justifyContent: 'space-between' }}>
                    <Text style={[styles.font16, { color: '#fdbb00' }]}>37%</Text>
                    <Text style={[styles.font12, { color: '#333333', marginBottom: 3 }]}>滞销库存</Text>
                  </View>
                  <View style={{ marginRight: 15, marginTop: 7 }}>
                    <Text style={[styles.font16, { color: '#fdbb00' }]}>￥13256.00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font16: {
    fontSize: 16,
  },
  font14: {
    fontSize: 14,
  },
  font12: {
    fontSize: 12,
  },
  font10: {
    fontSize: 10,
  }
})

export default container
