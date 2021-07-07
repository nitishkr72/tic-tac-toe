import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import PlayBoard from './playBoard'

export default function Home() {

    const [name, setName] = useState({
        Player1: 'Player 1',
        Player2: 'Player 2'
    })

    const gotoPlayBoard = ({name}) => {
        console.log(name)
    }

    return (
        <View style={styles.Container}>
            <Text style={styles.Header}>Tic Tac Toe</Text>

            <View style={styles.playerNameInfo}>
                <View style={styles.playerName}>
                    <Text style={styles.nameHeader}>Player 1 Name</Text>
                    <TextInput 
                        placeholder={'eg. Nitish'}
                        style={styles.nameInput}
                        onChangeText={(value) => {setName({
                            Player1: value,
                            Player2: name.Player2
                        })}}
                    />
                </View>

                <View style={styles.playerName}>
                    <Text style={styles.nameHeader}>Player 2 Name</Text>
                    <TextInput 
                        placeholder={'eg. Manish'}
                        style={styles.nameInput}
                        onChangeText={(value) => {setName({
                            Player1: name.Player1,
                            Player2: value
                        })}}
                    />
                </View>

            </View>
            <TouchableOpacity onPress={() => gotoPlayBoard({name})}>
                <Text style={styles.button}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        // backgroundColor: '#bbb',
        // // alignItems: 'center',
        // // justifyContent: 'center',
    },
    Header: {
        padding: 24,
        margin: 12,
        alignSelf: 'center',
        fontSize: 24
    },
    button: {
        padding: 20,
        paddingTop: 7,
        paddingBottom: 7,
        alignSelf: 'center',
        backgroundColor: '#ddd',
        borderStyle: 'solid',
        borderRadius: 3,

    },
    playerNameInfo: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        alignSelf: 'center'
    },
    playerName: {
        color: 'red',
        padding: 9,
        margin: 6,
        backgroundColor: '#eee',
        borderStyle: 'solid',
        borderRadius: 3,
    },
    nameHeader: {
        color: '#666',
        fontSize: 15,
        margin: 6
    },
    nameInput: {
        margin: 6,
        padding: 6,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        color: '#666',
        fontWeight: 'bold'
    }
})