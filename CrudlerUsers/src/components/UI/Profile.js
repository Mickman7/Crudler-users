import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import FullWidthImage from 'react-native-fullwidth-image';


const Profile = ({route}) => {

    const {name, dob, status, about, current} = route.params;
    return (
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Profile</Text>
        <FullWidthImage source={{uri:'https://media.licdn.com/dms/image/v2/C4E03AQHGMWy0QPHd6A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1645114408115?e=2147483647&v=beta&t=q2QsTOZ5cHl6wGiuq5-JgLLPhyASrsLg-txO_dmccPU'}} style={styles.profileImage}/>
        <Text>Name: {name}</Text>
        <Text>Dob: {dob}</Text>
        <Text>Status: {status}</Text>
        <Text>About</Text>
        <Text>{about}</Text>
        <View>
            <Text>Current Role</Text>
            <Text>{current}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    profileContainer: {
        padding: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: 'black',
        height: '80%',
    },
    profileImage: {
        borderRadius: 10,
    }

});

export default Profile