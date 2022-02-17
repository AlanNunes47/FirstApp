import React from "react";
import { Text, View, StyleSheet,TouchableOpacity} from "react-native";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import FirstApp from './Todo';
import QRPage from "./QRPage";

export default function StartPage() {
    
    const navigation  = useNavigation();
    return (
        <View style={styles.SPcontainer}>
            <View style={{flexDirection: 'row', paddingTop: 30, paddingHorizontal: 30, justifyContent: 'space-between'}}>
            </View>
            
            <View style={styles.SPbuttonsContainer}>
                <View>
                    <Text style={styles.SPlogo}>StartPage</Text>
                </View>

                <View style={styles.SPbuttons}>
                    <View style={styles.SPbutton1}>
                        <TouchableOpacity onPress={() => navigation.navigate('TODO')}>
                        <Text style={styles.TODObutton}>TODO page</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SPbutton2}>
                        <TouchableOpacity onPress={() => navigation.navigate('QRPage')}>
                        <Text style={styles.QRbutton}>QR Page</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SPbutton3}>
                        <TouchableOpacity onPress={() => navigation.navigate('MoviesPage')}>
                        <Text style={styles.QRbutton}>Movies Page</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    SPcontainer:{
        flex: 1,
        backgroundColor: '#1E1A3C',
    },
    SPlogo: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 40,
        fontWeight: '600',
        paddingTop: 55,
        
    },
    SPbuttonsContainer:{
    },
    SPbuttons: {
        alignSelf: 'center',
        paddingTop: 500,
        
    },
    SPbutton1: {

    },
    SPbutton2: {
        paddingTop: 20,
    },
    SPbutton3: {
        paddingTop: 20,
    },
    TODObutton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    QRbutton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',

    }

})