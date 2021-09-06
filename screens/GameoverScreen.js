import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameoverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNum}</Text>
            <Text>Number was: {props.UserNum}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    }
});

export default GameoverScreen;