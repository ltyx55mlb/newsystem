import React from 'react'
import {StyleSheet,View, Image,ScrollView,Dimensions,TouchableHighlight,Text} from 'react-native'
import { Icon ,Grid,Row,Col,Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const MyNava = ({ navigation }) => (
<Grid style={{backgroundColor:'#e32340',flex:1}}>
  <Row size={2} style={{flex:1}}>
    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
      <Icon name='arrow-back' color='white' style={{margin:15}} onPress={() => navigation.goBack(null)}/>
    </View>
  </Row>
  <Row size={4}>
    <View style={{flex:1}}>
    <Icon name='check' color='white' size={100} style={styles.Iconcheck}/>
    <View style={styles.TextViewPay}>
    <Text style={styles.TextPay}>支付成功</Text>
    </View>
    <View style={styles.TextView}>
    <Text style={styles.Text}>您所请求的订单支付步骤已经完成，订单详情的收取方式有如下选项，请根据所需要选择</Text>
    </View>
    </View>
    
  </Row>
  <Row size={3}>
    <View style={{flex:1}}>
    <View style={{flexDirection: 'row',
    justifyContent:'center',marginBottom:18}}>
    <Text style={{   fontSize: 16,
    color: '#F5F5F5',}}>Receipt</Text>
    </View>
    <View style={styles.Iconcheck}>
    <View style={{marginRight:25}}>
    <Icon name='mail-outline' color='white' size={40} />
    <Text style={styles.BottomText}>Email</Text>
    </View>
    <View style={{marginRight:25}}>
    <Icon name='person-pin' color='white' size={40} />
    <Text style={styles.BottomText}>SMS</Text>
    </View>
    <View>
    <Icon name='local-printshop' color='white' size={40} />
    <Text style={styles.BottomText}>Print</Text>
    </View>
    </View>
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row',
    justifyContent:'center',marginTop:15}}>
      <Text style={styles.BottomText}>failed sending receipt Email:</Text>
      </View>
      <View style={{flexDirection: 'row',
    justifyContent:'center'}}>
      <Text style={styles.BottomText}>xyz@email.com</Text>
      </View>
        <Button onPress={() => navigation.navigate('Blackfile')}
             title={'RESEND'} style={{marginTop:15}} buttonStyle={{backgroundColor:'white'}}
             color='#e32340'/>
    </View>
     </View>
  </Row>
  </Grid>
); 

export default MyNava;

var styles = StyleSheet.create({
  Iconcheck:{
    flexDirection: 'row',
    justifyContent:'center',
  },
  TextViewPay:{
    flexDirection: 'row',
    justifyContent:'center',
  },
  TextPay:{
    fontWeight: '800',
    fontSize: 20,
    color: 'white',
  },
  TextView:{
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:10
  },
  Text:{
    width:SCREEN_WIDTH/1.5,
    fontSize: 11,
    color: '#F5F5F5',
    fontFamily: 'Times', 
  },
  BottomText:{
    color: '#F5F5F5',
    fontFamily: 'Times', 
    fontSize:14,
    marginLeft:6
  }
})