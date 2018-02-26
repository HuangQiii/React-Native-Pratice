import React, { Component } from 'react';
import { View, StyleSheet, Text,ListView,Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var DATA = [
    {
        id: 1,
        name: '秒贷-极速贷',
        des: '15分钟快速审核 2小时快速贷款',
        numLow: 3000,
        numLarge: 30000,
        rate: 0.03,
        logo: 'https://modao.cc/uploads3/images/1188/11887180/raw_1502844093.jpeg',
    },
    {
        id: 2,
        name: '现金贷',
        des: '适合短期贷款需求',
        numLow: 3000,
        numLarge: 6000,
        rate: 0.03,
        logo: 'https://modao.cc/uploads3/images/1188/11887222/raw_1502844459.jpeg',
    },
    {
        id: 3,
        name: '现金贷款小额贷',
        des: '信用换现金',
        numLow: 3000,
        numLarge: 30000,
        rate: 0.026,
        logo: 'https://modao.cc/uploads3/images/1188/11887233/raw_1502844527.jpeg',
    }
];

export default class Loan extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `贷款管家`,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-cash" size={15} color={tintColor} />
        ),
    });

    constructor(props) {
        super(props);
         this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => { return row1 !== row2 },
            }),
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(DATA),
        });
    }

    renderList(list) {
        return (
            <View style={{ flexDirection: 'row', height: 110, borderTopWidth: 1, borderTopColor: '#eee' }}>
                <View style={{ width: 110, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ overflow: 'hidden', width: 80, height: 80, borderRadius: 10, backgroundColor: 'red' }}>
                        <Image resizeMode='stretch' style={{ width: 80, height: 80, }} source={{ uri: list.logo }} />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 20, }}>
                    <Text style={{ color: '#101010', fontSize: 18, marginBottom: 5 }}>{list.name}</Text>
                    <Text style={styles.listTextNormal}>{list.des}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.listTextNormal}>贷款范围：</Text>
                        <Text style={styles.listTextHightLight}>{list.numLow} - {list.numLarge}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.listTextNormal}>日利率 </Text>
                        <Text style={styles.listTextHightLight}>{list.rate} %</Text>
                    </View>
                </View>
                <View style={{ width: 30, justifyContent: 'center' }}>
                    <Icon name="ios-arrow-forward" size={25} color={'#B8B8B8'} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style = {{ flexDirection:'row',alignItems:'center',padding:5,paddingLeft:10,borderBottomWidth:1,borderBottomColor:'#eee', }}>
                        <Icon name="md-list" size={15} color={'#101010'} /><Text>贷款筛选</Text>
                    </View>
                    <View>
                        
                    </View>
                    <View style={{justifyContent:'center',padding:5,paddingLeft:10}}>
                        <Text style={{color:'#A8A8A8',}}>共80个结果</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderList.bind(this)}
                    />
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
    },
    listTextNormal: {
        color: '#999999',
        fontSize: 14
    },
    listTextHightLight: {
        color: '#E51C23',
        fontSize: 14
    },
});