import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { Button } from "../UI/Button";



const Details = ({route,navigation}) => {
    const gotoHomeScreen = (user) => navigation.navigate('HomeScreen', { name });

    const [name, setName] = useState("");
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Enter your name!</Text>
            <View>
                <TextInput value={name} onChangeText={setName} style={styles.input}/>
                <Button label='Add' onClick={gotoHomeScreen}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        width: 375,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',  
        padding: 10, 
        marginBottom: 10,       
    },
  
    
})

export default Details;