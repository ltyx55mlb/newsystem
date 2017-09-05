import React from 'react'
import { View, Text, Image, Dimensions, ImageBackground, Button, ScrollView } from 'react-native'

const PayView4 = ({ navigation }) => (
    <ScrollView>
        <Text>payView4</Text>
        <Button onPress={() => navigation.goBack(null)} title="payView4 Go back" />
    </ScrollView>
);

export default PayView4;