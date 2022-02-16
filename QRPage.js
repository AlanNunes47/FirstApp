import React, {useState} from "react";
import { Text, View, StyleSheet} from "react-native";
import 'react-native-gesture-handler'; 
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import QRCode from "react-native-qrcode-svg";
import TaskImputField from './TaskImputField';


export default function QRPage() {

    const [imput,setImput] = useState ('');
    const [qrValue,setQrValue] = useState ('');



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
            <QRCode value = {qrValue ? qrValue : 'NA'} size={285} color="white" backgroundColor="#3E3364" >
               
            </QRCode>
            </View> 
            <View style={styles.imputFieldContainer}>
            <TextInput style={styles.imputFieldQR} onChangeText={(text) => {setImput(text)}} placeholder ={'Write a task'}></TextInput>
            </View>
            <View style={styles.QRCodeGeneratorContainer}>
            <TouchableOpacity style={styles.generatorQR} onPress={() => {setQrValue (imput)}} textColor="#fff">
            <Text style={styles.TextQR}>Generate QR code</Text>
            </TouchableOpacity>
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
        backgroundColor:'#3E3364',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        
    },
    imputFieldContainer: {
        backgroundColor: '#3E3364',
        marginHorizontal: 40,
        marginLeft: 43,
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    imputFieldQR: {
        borderColor: '#fff',
        color: '#fff',
        height: 30, 
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