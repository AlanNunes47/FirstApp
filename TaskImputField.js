import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect } from 'react/cjs/react.development';

export default TaskImputField = (props) => {
    const [task, setTask] = useState();
    
    const handleAddTask = (value) => {
        props.addTask(task);
        setTask(null)
    }
    

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
            <TextInput style={styles.imputField} value={task} onChangeText={text => setTask(text)} placeholder ={'Write a task'} TextColor={'#fff'} placeholderTextColor={'white'}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.button}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color="black"/>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    imputField: {
        color: '#fff',
        height: 50,
        flex: 1,
        
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
});