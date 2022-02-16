import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Keyboard, ScrollView, Alert} from 'react-native';
import TaskImputField from './TaskImputField';
import TaskItem from './TaskItem';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function FirstApp(){
  const [tasks, setTasks] = useState([]);

  const save = async(tasks) => { 
    try{
      // console.log(tasks)
        await AsyncStorage.setItem("task", JSON.stringify(tasks));
    }catch (err) {
        alert(err);
    }
  }

  const load = async () => {
    try {
        let tasks = await AsyncStorage.getItem("task")
        console.log(tasks)
        if (tasks !== null) {
            setTasks(JSON.parse(tasks));
        }

    }catch (err) {
        alert (err)
    }
};

useEffect (() => {
  load()
}, []);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    save([...tasks, task])
    Keyboard.dismiss();
  }

//Delete confirmation
  const deleteTask = (deleteIndex) => {
    Alert.alert(
      "Are you sure?",
      "Are you sure you want to delete this? ",
      [
        {
          text: 'Yes',
          onPress: () => { 
            setTasks(tasks.filter((value, index)=> index !== deleteIndex));
          }
        },
        {
          text: 'No',
          onPress: () =>{
            console.log('No pressed');
          }
        }
      ]
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.ScrollView}>
        {
          tasks.map((task, index)=> {
            return(
              <View key={index} style={styles.taksContainer}>
                <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
              </View>
            );
          })
      }

      </ScrollView>
      <TaskImputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color:'#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  ScrollView: {
    marginBottom: 70,
  },
  taksContainer: {
    marginTop: 20,
  }
});

