import React from 'react'
import { View, Text, Image, Dimensions, ImageBackground, Button, ScrollView } from 'react-native'

const PayView2 = ({ navigation }) => (
    <ScrollView>
        <Text>payView2</Text>
        <Button onPress={() => navigation.goBack(null)} title="payView2 Go back" />
    </ScrollView>
);

export default PayView2;