import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ActivityIndicator} from "react-native";


export default class MoviesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then ((response) => response.json() )
            .then ((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                })

            })

        .catch((error) => {
            console.log(error)
        });  

    }
    render() {

        if (this.state.isLoading) {

            return (
                <View style={styles.container}>
                    <ActivityIndicator/>
                </View>    
            )
        } else {

            let movies = this.state.dataSource.map((val, key) =>{
                return <View key={key} style={styles.item}>
                    <Text style={styles.text}>
                        {val.id}. {val.title}, {val.releaseYear}
                    </Text>
                </View>

            })
        
            return (
                <View style={styles.main}>
                    <View style={{flexDirection: 'row', paddingTop: 30, paddingHorizontal: 30, justifyContent: 'space-between'}}>
                        <Text style={styles.heading}>Movies Page</Text>
                    </View>
                    <View style={styles.container}>
                        {movies}
                    </View>
                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    main: {
        flex:1,   
        paddingTop: 25,
        backgroundColor: '#fff',
    },
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex:1,
        alignSelf: "stretch",
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
    },
    heading: {
        color:'#1E1A3C',
        fontSize: 20,
        fontWeight: '600',
    },
    text: {
        color: '#1E1A3C',
        fontSize: 17,
    }
   
});