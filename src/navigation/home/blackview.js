import React ,{Component}from 'react'
import {StyleSheet,
    View, 
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    Text,
    PixelRatio,
    TouchableOpacity,
    } from 'react-native'
import { Icon } from 'react-native-elements'
import CheckBox from 'react-native-check-box'
import keys from '../test/key.json'

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class MyBlack extends Component {
// const MyBlack = ({ navigation }) => (
    constructor(props) {
        super(props);
        this.state = {
            dataArray: []
        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({
            dataArray: keys
        })
    }
    _backLastPage() {
		const { navigation } = this.props;
        navigation.goBack(null);
        
    }
    _onClick(data) {
        data.checked = !data.checked;
    }
       renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0)return;
        var len = this.state.dataArray.length;
        var views = [];
        for (var i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBoxb(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBoxb(this.state.dataArray[len - 1])}
                </View>
            </View>
        )
        return views;

    }
    renderCheckBox(data) {
        return (
            <CheckBox
                style={{ padding: 10}}
                onClick={()=>this._onClick(data)}
                isChecked={data.checked}
                rightTextView={this.rightView(data)}
                unCheckedImage={<Icon  name='check-box-outline-blank' color='#C6C5C2' />}
                checkedImage={<Icon name='check-box' color='#C6C5C2' />}
            />);
    }
rightView(data){
    return(
        <View style={{flex:1,flexDirection:'row'}}>
        <View style={{width:35,height:70,paddingTop:23,paddingLeft:10}}>
            <Icon name={data.status=='success'?'add-circle':'remove-circle'} color={data.status=='success'?'#63AF7A':'#ae5958'}/>
        </View>
        <View style={{flex:1,height:70,marginLeft:10}}>
            <View style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:16,color:'#D3D1D2',fontWeight:'500'}}>{data.name}</Text>
                <View style={styles.flexright}>
                    <Icon  name='surround-sound' color={data.status=='success'?'#63AF7A':'#ae5958'} />
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:12,color:'#C6C5C2'}}>供应商：{data.Delta}</Text>
                <View style={styles.flexright}>
                    <Text style={{fontSize:12,color:'#C6C5C2'}}>{data.money}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:4}}>
                <Text style={{fontSize:12,color:'#C6C5C2'}}>库存：{data.kunum}</Text>
                <View style={styles.flexright}>
                    <Text style={{fontSize:12,color:'#C6C5C2'}}>{data.status=='success'?'提交成功':'提交错误'}</Text>
                </View>
            </View>
        </View>
        </View>
    )
}

// --------——————-——————∨————————————————————————————————∨—————————————————————————————∨—————————————————————————————∨

 renderCheckBoxb(data) {
        return (
            <CheckBox
                style={{padding: 10}}
                onClick={()=>this._onClick(data)}
                isChecked={data.checked}
                rightTextView={this.rightViewb(data)}
                unCheckedImage={<Icon  name='check-box-outline-blank' color='#C6C5C2' />}
                checkedImage={<Icon name='check-box' color='#C6C5C2' />}
            />);
    }
rightViewb(data){
    return(
        <View style={{flex:1,flexDirection:'row'}}>
            <View style={{width:35,height:70,paddingTop:23,paddingLeft:10}}>
                <Icon name='remove-circle' color='#ae5958'/>
            </View>
            <View style={{flex:1,height:70,marginLeft:10,flexDirection:'column'}}>
                <View style={{flexDirection:'row',marginTop:4}}>
                    <Text style={{fontSize:16,color:'#D3D1D2',fontWeight:'500'}}>{data.name}</Text>
                    <View style={styles.flexright}>
                        <Icon  name='surround-sound' color={'#c58232'} />
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:4}}>
                    <Text style={{fontSize:12,color:'#C6C5C2'}}>{data.Delta}</Text>
                    <View style={styles.flexright}>
                        <Text style={{fontSize:12,color:'#ae5958'}}>{data.money}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:4}}>
                    <Text style={{fontSize:12,color:'#C6C5C2'}}>{data.time}</Text>
                    <View style={styles.flexright}>
                        <Text style={{fontSize:12,color:'#ae5958'}}>{'编辑中'}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
// —————————————————————∧———————————————————————————∧—————————————————————————————————————∧—————————————————————————————∧
    render() {
		return (
    <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginTop:7}}>
                <TouchableOpacity style={{marginLeft:10}} onPress={()=>this._backLastPage()}>
                    <Icon name='keyboard-backspace' color='white' />
                </TouchableOpacity>
            </View>
            <View style={{flex:4,flexDirection:'row',justifyContent:'center',marginTop:7}}>
                <Text style={{color:'#C6C5C2',marginTop:4}}>库存管理系统</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',marginTop:7}}>
                <TouchableOpacity style={{marginRight:10}} onPress={()=>this._backLastPage()}>
                    <Icon name='add' color='#63AF7A' />        
                </TouchableOpacity>    
            </View>
        </View>
        {/* 2 */}
        <View style={{height:50,marginTop:10}}>
            <View style={styles.flexcenter}>
                <View style={{width:330,height:45,borderColor:'#C6C5C2',borderWidth:1/PixelRatio.get(),borderRadius:40}}>
                    <View style={{flexDirection:'row',marginTop:7}}>
                        <View style={{flex:1,justifyContent:'flex-start'}}>
                            <Icon name='format-line-spacing' color='#c58232' size={30}/>
                        </View>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Icon name='format-list-bulleted' color='#63AF7A' size={30}/>
                        </View>
                        <View style={{flex:1,justifyContent:'flex-end'}}>
                            <Icon name='timelapse' color='#0389cb' size={30}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        {/* Text */}
        <View style={{height:30,marginTop:10}}>
             <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
                <Text style={{fontSize:14,color:'#C6C5C2'}}>库存管理者：<Text style={{fontSize:14,color:'#D3D1D2'}}>UI设计者</Text></Text>
            </View>
        </View>
        {/* List */}
        <View style={{flex:1,marginTop:15,}}>
    
                <View style={{height:27,flexDirection:'row',borderBottomWidth:1/PixelRatio.get(),}}>
                    <CheckBox style={{marginLeft:10}} 
                                onClick={()=>alert()}
                                unCheckedImage={<Icon  name='crop-din' color='#C6C5C2' />}
                                checkedImage={<Icon name='check-box' color='#C6C5C2' />}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:14,color:'#C6C5C2',marginTop:2}}>全选</Text>
                    </View>
                    <View style={styles.flexright}>
                        <Text style={{fontSize:12,color:'#C6C5C2',marginRight:10}}>{'货币：人民币'}</Text>
                    </View>
                </View>
                <ScrollView >
                    {this.renderView()}
                </ScrollView>
                {/* TabBar */}
                <View style={{height:60,flexDirection:'row',borderTopWidth:1/PixelRatio.get(),borderTopColor:'#55555f',paddingTop:6}}>
                    <View style={{width:SCREEN_WIDTH/4}}>
                        <TouchableOpacity >
                            <Icon name='note-add' size={28} color='#63AF7A'/>
                            <Text style={{color:'#C6C5C2',alignSelf:'center',marginTop:5}}>入库</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:SCREEN_WIDTH/4}}>
                        <TouchableOpacity >
                            <Icon name='forum' size={28} color='#C6C5C2'/>
                            <Text style={{color:'#C6C5C2',alignSelf:'center',marginTop:5}}>出库</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:SCREEN_WIDTH/4}}>
                        <TouchableOpacity >
                            <Icon name='settings' size={28} color='#c58232'/>
                            <Text style={{color:'#C6C5C2',alignSelf:'center',marginTop:5}}>设置</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:SCREEN_WIDTH/4}}>
                        <TouchableOpacity >
                            <Icon name='receipt' size={28} color='#C6C5C2'/>
                            <Text style={{color:'#C6C5C2',alignSelf:'center',marginTop:5}}>收据</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
        </View>
        
    </View>
// ); 
        )
    }
}

// export default MyBlack;

var styles = StyleSheet.create({
    container:{
        backgroundColor:'#393A44',
        flex:1,
    },
    header:{
        flexDirection:'row',
        marginTop:25,
        height:40,
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#C6C5C2',
    },
    flexcenter:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    flexleft:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    flexright:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },



    
})