import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity} from 'react-native';

export default class NavBar extends React.Component{
    render(){
        return(
            <View style={styles.navbar}>
                <View style={{flex:1, alignItems:"center"}}>
                    <TouchableOpacity onPress={() => this.props.goToHome()}>
                        <FontAwesome name="microphone" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems:"center"}}>
                    <TouchableOpacity onPress={() => this.props.goToLists()}>
                        <FontAwesome name="heart" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
});