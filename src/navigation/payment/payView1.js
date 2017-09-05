import React from 'react'
import { View, Text, Image, Dimensions, ImageBackground, Button, ScrollView } from 'react-native'

const PayView1 = ({ navigation }) => (
    <ScrollView>
        <Text>payView1 </Text>
        <Button onPress={() => navigation.goBack()} title="payView1 Go back" />
    </ScrollView>
);

export default PayView1;