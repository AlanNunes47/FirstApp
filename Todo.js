import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Keyboard, ScrollView, Alert} from 'react-native';
import TaskImputField from './TaskImputField';
import TaskItem from './TaskItem';
import 'react-native-gesture-handler'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Here we say we make a function called FirstApp and we export it, and the functions returns visual components
// the function name can be anything can e.g be Test aswell just remember it needs to be captilized
export default function FirstApp(){
  const [tasks, setTasks] = useState([]);

  const navigation  = useNavigation();


  // This function ta tuma e "Lista di tasks" and saves it in the asyncStorage
  const save = async(tasks) => { 
    try{
        // pa bo set un value bo ta skohe un "key" den nos kaso task and as second paramter loke bo store
        // you use the key to basicly access the asyncstorage and kue e kosnn ku ba save
        // Komo ku den async storage bo por only stores strings we have to stringify the list of tasks
        await AsyncStorage.setItem("task", JSON.stringify(tasks));
        // await AsyncStorage.clear()
    }catch (err) {
        alert(err);
    }
  }

  const load = async () => {
    try {
      //esaki basicly just gets the itemsnn ku ba store
      // pa bo get e itemnn bo mester di e key ku ba huza pa savenn
        let tasks = await AsyncStorage.getItem("task")
        console.log(tasks)
        if (tasks !== null) { 
            // ora ba hanje e lista ku e function di line 29 bo tin ku basicly convert e back na un lista instead di un string
            // dus parse ta gwn convert e string na e lista
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
          onPress: async () => { 
            // aki ora bo delete un task bo ta basicly filter out e task... aki ma gwn store in den un variable
            // paso I need it twice
            let filteredTasks = tasks.filter((value, index)=> index !== deleteIndex);
            // I just realized ku nos por gwn call e save function atrobe lokual ta gwn save again den async storage pero
            //without e task ku bo a kabi delete
            save(filteredTasks);
            setTasks(filteredTasks);
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
      <View style={{flexDirection: 'row', paddingTop: 30, paddingHorizontal: 30, justifyContent: 'space-between'}}>
        <Text style={styles.heading}>TODO LIST</Text>
      {/* Right here we made a button and when you click on it you navigate to the QRPage this works cause we define a route with the name QRPage  */}
        <TouchableOpacity onPress={() => navigation.navigate('QRPage')}>
          <Text style={styles.QRbutton}>QR Page</Text>
        </TouchableOpacity>
      </View>
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
  },
  ScrollView: {
    marginBottom: 70,
  },
  taksContainer: {
    marginTop: 20,
  },
  QRbutton: {
    color: 'white', 
    alignSelf: 'center', 
    marginTop: 6.5, 
    marginHorizontal: -10,
    paddingHorizontal: 10,
  }
});

