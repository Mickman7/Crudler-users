import { Text, View, StyleSheet } from 'react-native'

const HomeScreen  = ({route}) => {

    const { name } = route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {`Welcome ${name}!`}
            </Text>
            <Text>This is an app that uses the CRUDL workflow for both modules and users. Feel free to explore.</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        margin: 5,

    },
})

export default HomeScreen;