import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
const ComponnentsScreen=()=>{
    const name = <Text>Arpit is my name</Text>;
    return (
        
    <View>
        <Text style={styles.textStyle}>Getting Sbxbtarted With React Native!</Text>
        <Text style ={styles.textStyle2}>
          {name}
        </Text>
        </View>
    );
};
const styles=StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    textStyle2:{
        fontSize:20
    }

});
export default ComponnentsScreen;