import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// right here we imported to the pages
//As you can see here The function gets imported here that means we can use it here.
import FirstApp from './Todo';
import QRPage from "./QRPage";
import StartPage from "./StartPage";
import MoviesPage from "./MoviesPage";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        // Navigation ta gwn un "container" ku ta hold all the possible pages
        <NavigationContainer >
        {/* // akinn we just initialize un stack navigator with 2 routes aka pages */}
        <Stack.Navigator>
        <Stack.Screen initialRouteName="HomeScreen" name="StartPage" component={StartPage} options={{ headerShown: false, headerTitleStyle: {color: '#fff',},headerStyle: {backgroundColor: '#3E3364', },}} />
            {/* first page ta e todo dus e prome kos ku bo ta mira */}
          <Stack.Screen name="TODO" component={FirstApp} options={{ headerShown: false, headerTitleStyle: {color: '#fff',},headerStyle: {backgroundColor: '#3E3364', },}} />
            {/* second page is the QR Page  */}
            {/* as you can see every page has a name and component, a component is basicly what needs to be redered when you go to that page */}
          <Stack.Screen name="QRPage" component={QRPage} options={{headerShown: false, headerTitleStyle: {color: '#fff',},headerStyle: {backgroundColor: '#3E3364',},}} />
          <Stack.Screen name="MoviesPage" component={MoviesPage} options={{ headerShown: false, headerTitleStyle: {color: '#fff',},headerStyle: {backgroundColor: '#3E3364', },}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};


export default App;                               
