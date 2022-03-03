import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import 'react-native-gesture-handler'; 
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import QRCode from "react-native-qrcode-svg";

import TimerComponent from "./TimerComponent";



export default function QRPage() {
    const [imput,setImput] = useState ('');
    const [qrValue,setQrValue] = useState ('');
    const [randomNumber, setRandomNumber] = useState (0);

    
    function randomIntFromInterval(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
    
    const generateQr = () => {
        let generatedRandomNumber =  randomIntFromInterval(1000, 11000);
        setRandomNumber(generatedRandomNumber);
        const SQ = `SQ;0010;998877665544332211;${randomNumber};qwerty`;
        setQrValue(SQ);

        {/*return fetch('https://misalu.live/ords/api/scan-pi1/piscan-info')
            .then ((response) => response.json() )
            .then ((responseJson) => {

            })

        .catch((error) => {
            console.log(error)
        }); */} 
    }


    const navigation  = useNavigation();
    return (
    <View style={styles.QRcontainer}>
        <View style={{flexDirection: 'row', paddingTop: 30, paddingHorizontal: 30, justifyContent: 'space-between'}}>
            <Text style={styles.QRheading}>QR PAGE</Text>

            <TouchableOpacity onPress={() => navigation.navigate('TODO')}>
                <Text style={styles.TODObutton}>TODO page</Text>
            </TouchableOpacity>
        </View>
        
        {/*QRCODE*/}
        <View>
            <View style={styles.QRcontainer2}>
            <QRCode value = {qrValue ? qrValue : 'NA'} size={285} color="black" backgroundColor='#fff' >
               
            </QRCode>
            </View> 
            {/*<View style={styles.imputFieldContainer}>
            <TextInput style={styles.imputFieldQR} onChangeText={(text) => {setImput(text)}}></TextInput>
            </View>*/}
            <View style={styles.randomNumber}>
                
            </View>

            <View style={styles.QRCodeGeneratorContainer}>
            <TouchableOpacity style={styles.generatorQR} onPress={() => {generateQr()}} textColor="#fff">
            <Text style={styles.TextQR}>Generate QR code</Text>
            </TouchableOpacity>
            </View>
            <View>
                <TimerComponent/>
            </View>
        </View>
    </View>
    )

}
const styles = StyleSheet.create({
    QRcontainer: {
        flex: 1,
        backgroundColor: '#1E1A3C',
    },
    TODObutton: {
        color: '#fff', 
        alignSelf: 'flex-end', 
        marginTop: 6.5, 
        marginHorizontal: -10,
        paddingHorizontal: 10,

    },
    randomNumber: {
        alignSelf: 'center',
    },
    randomNumberNR: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20,
    },
    QRheading: {
        color:'#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    TextQR: {
        color: '#fff'
    },
    QRcontainer2: {
        alignSelf: 'center',
        backgroundColor:'#fff',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        
    },
    imputFieldContainer: {
        backgroundColor: '#3E3364',
        marginHorizontal: 58,
        marginLeft: 60,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
    
    },
    imputFieldQR: {
        borderColor: '#fff',
        color: '#fff',
        height: 40, 
        marginHorizontal: 10, 
        marginLeft:10, 
        borderRadius: 10, 
        backgroundColor: '#3E3364',
        
    },
    QRCodeGeneratorContainer: {
        borderRadius: 50,
        marginBottom: 10,
        alignSelf: 'center',
        padding: 10,
        marginTop: 10,
    }
    

})