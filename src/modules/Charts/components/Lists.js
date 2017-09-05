import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet} from 'react-native';
import { ListItem,Avatar} from 'react-native-elements';
import * as action from "../duck"

const Lists = ({ lists }) => (
  <ScrollView style={{flex: 1}}>
    {Object.values(lists).map(({ id, name ,subtitle,inprice,outprice,imageurl}) => (
      <ListItem
        title={<Text style={{fontSize:16,marginLeft:20,width:170}}>{name}</Text>}
        avatar={<Avatar 
                  medium
                  source={{uri:imageurl}}
                  onPress={()=>alert('aa')}
                  activeOpacity={0.7}
                  containerStyle={{flex: 1, marginRight: 60}}/>}
        key={`list-${id}`}
        onPress={() => {console.log('你点击的是列表'+id)}}
        subtitle={
          <View style={{flex:1}}>
            <Text style={{fontSize:12,marginLeft:20,color:'#778899',marginTop:5}}>库存数量:{subtitle}</Text>
            <Text style={{fontSize:12,marginLeft:20,color:'#778899',marginTop:5}}>进货价:{<Text style={{color:'#3CB371'}}>￥{inprice}</Text>}</Text>
            <Text style={{fontSize:12,marginLeft:20,color:'#778899',marginTop:5}}>零售价:{<Text style={{color:'#3CB371'}}>￥{outprice}</Text>}</Text>
          </View>}
      />
    ))}


  </ScrollView>
)


export default Lists;