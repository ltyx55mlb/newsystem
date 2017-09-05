import React from 'react'
import { View, Text, Image, Dimensions, ImageBackground, Button, ScrollView } from 'react-native'

const PayView3 = ({ navigation }) => (
    <ScrollView>
        <Text>payView3</Text>
        <Button onPress={() => navigation.goBack(null)} title="payView3 Go back" />
    </ScrollView>
);

export default PayView3;