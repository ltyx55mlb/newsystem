import React from 'react'
import { View, Text, Image, Dimensions, ImageBackground, Button, ScrollView } from 'react-native'

const PayView5 = ({ navigation }) => (
    <ScrollView>
        <Text>payView5</Text>
        <Button onPress={() => navigation.goBack(null)} title="payView5 Go back" />
    </ScrollView>
);

export default PayView5;